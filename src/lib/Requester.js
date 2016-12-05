'use strict';

global.self = window;
window.fetch = null;
require('whatwg-fetch');

const timer = typeof performance !== `undefined` && typeof performance.now === `function` ? performance : Date;

class Requester {

    //TODO: We should probably add authentication here

    /**
     * @param {string} url
     * @param {Object|null} [data]
     * @param {function} callback
     */
    static request(url, data, callback) {

        let headers = {
            'Accept': 'application/json',
            //'Content-Type': 'application/json'
        };

        let options = {
            credentials: 'same-origin',
            method: data ? 'POST' : 'GET',
            headers: headers
        };

        if (data) {
            let body = new FormData();

            if (data instanceof FormData) {
                body = data;
            } else if (data instanceof HTMLFormElement || (typeof data.getAttribute === 'function')) {
                body = new FormData(data);
            } else if (typeof data === 'object') {
                Object.keys(data).forEach(key => body.append(key, data[key]));
            } else {
                options.headers['Content-Type'] = 'text/plain';
                body = data;
            }

            options.body = body;
        }

        let t = timer.now();

        let cb = (error, result, user) => {
            Requester.log(url, data, timer.now() - t, error, result);
            callback(error, result, user);
        };

        global.fetch(url, options)

        .then(response => {
            response.json()

            .then(json => {
                if (json.error) cb(json.error, json.result || {}, json.user || null);
                else cb(null, json.result || {}, json.user || null);
            })
            .catch(error => {
                cb({
                    status: response.status,
                    message: 'Invalid response.'
                })
            });
        })
        .catch(error => {
            cb({
                status: 500,
                message: error.message
            })
        });
    }

    /**
     * @param {string} url
     * @param {Object|null} data
     * @param {number} time
     * @param {Object|null} error
     * @param {*} result
     */
    static log(url, data, time, error, result) {
        let color = {
            success: '#222222',
            request: '#9E9E9E',
            result: '#4CAF50',
            error: '#F20404'
        };

        if (console.groupCollapsed) {
            console.groupCollapsed('%c  - XHR [' + (data ? 'POST' : 'GET') + '] ' + url + ' (in ' + time.toFixed(2) + ' ms)', 'color: ' + (error ? color.error : color.success) + '; font-weight: normal;');

            if (data) console.log('%c request', 'color: ' + color.request, data);
            if (result) console.log('%c result', 'color: ' + color.result, result);
            if (error) console.log('%c error', 'color: ' + color.error, error);

            console.groupEnd();
        } else {
            console.log('  - XHR [' + (data ? 'POST' : 'GET') + '] ' + url + ' (in ' + time.toFixed(2) + ' ms)');
            if (data) console.log('    request', data);
            if (result) console.log('    result', result);
            if (error) console.log('    error', error);
        }

    }
}


module.exports = Requester;
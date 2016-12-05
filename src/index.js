///////////////////////////////////////////
// jquery and tether for bootstrap to use
// alternative is to link them in index.html
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
window.Tether = require('tether');
require('bootstrap/dist/js/bootstrap');

import configureStore from './store/configureStore';

import App from './containers/app/App';
import './index.css';

const store = configureStore();

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const Requester = require('./lib/Requester');

ReactDOM.render(
    <Provider store={store}>
        <App request={Requester.request}/>
    </Provider>,
    document.getElementById('wrapper')
);

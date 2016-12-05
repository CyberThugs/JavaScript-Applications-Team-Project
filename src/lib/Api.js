import Requester from './Requester';

export default class Api {
    constructor() {
        this._marvelUrl = 'https://gateway.marvel.com';
        this._requester = Requester.request;
        this._characters = null;
    }

    getCharacters () {
        this._requester(this._marvelUrl + '/v1/public/characters', {}, (error, result) => {
            if (typeof error === 'undefined') error = null;
            if (typeof result === 'undefined') result = null;

            if (error) {
                console.log(error);
                throw new Error();
            }

            if(result) {
                console.log(result);
                this._characters = result;
            }

        });
    }
}

import Requester from './Requester';

export default class Api {
    constructor() {
        this._marvelUrl = 'https://gateway.marvel.com';
        this._marvelKey = '5b2cf74d7b537105c93b55478200435a';
        this._requester = Requester.request;
        this._characters = null;
    }

    getCharacters () {
        this._requester(this._marvelUrl + '/v1/public/characters?apikey=' + this._marvelKey, {}, (error, result) => {
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

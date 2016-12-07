import React, {Component} from 'react';

import Api from '../../lib/Api';

let api = new Api();

const style = {
    width: '400px',
    height: '500px',
    overflow: 'auto'
};

export default class CharactersSearchForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.searchCharacter = this.searchCharacter.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        let characterName = this.refs.name.value.trim();

        console.log(characterName);

        api.searchCharacter(this.searchCharacter, characterName);

        console.log('onSubmit()');
    }

    searchCharacter(error, result) {
        if (typeof error === 'undefined') error = null;
        if (typeof result === 'undefined') result = null;

        if (error) {
            throw new Error();
        }

        if (result) {
            console.log(result);
            this.props.handleCharacterSearch(result);

        }

    }

    render() {
        return (
            <div>
                <h1>Search Characters</h1>
                <div className="panel panel-default">
                    <form onSubmit={this.onSubmit}>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" id="character-name" ref="name"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
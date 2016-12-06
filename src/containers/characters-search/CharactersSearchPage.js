import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharactersSearchForm from '../../components/characters-search-form/CharactersSearchForm';
import CharactersList from '../../components/characters-list/CharactersList';

class CharactersSearchPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <CharactersSearchForm />
                        <CharactersList characters={this.props.characters.characters}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(CharactersSearchPage);



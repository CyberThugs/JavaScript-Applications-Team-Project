import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharactersSearchForm from '../../components/characters-search-form/CharactersSearchForm';
import Character from '../../components/character/Character';
import CharactersList from '../../components/characters-list/CharactersList';

class CharactersSearchPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <CharactersSearchForm handleCharacterSearch={this.props.handleCharacterSearch} />
                        <Character character={this.props.characterSearch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(CharactersSearchPage);



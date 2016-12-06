import React, {Component} from 'react';

import Character from '../character/Character'

export default class CharactersList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.characters);
        return (
            <div className="well">
                {
                    this.props.characters.map(character => {
                        return <Character key={character.id} character={character} />
                    })
                }
            </div>
        )
    }
}
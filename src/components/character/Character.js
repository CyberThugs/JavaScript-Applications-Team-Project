import React, {Component} from 'react';

export default class Character extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="well">
                <img
                    src={this.props.character.thumbnail.path + '/portrait_xlarge.' + this.props.character.thumbnail.extension}
                    alt={this.props.character.name}/>
                <h3><strong>Name:</strong> {this.props.character.name}</h3>
                <h3><strong>Description: </strong> {this.props.character.description}</h3>
                <a href="javascript:;">Details</a>
            </div>
        )
    }
}
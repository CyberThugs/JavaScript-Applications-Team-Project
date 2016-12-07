import React, {Component} from 'react';

export default class Character extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.characterSearch);

        return (
            <div className="well">
                <h1>{this.props.characterSearch}</h1>
            </div>
        )
    }
}
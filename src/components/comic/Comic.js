import React, {Component} from 'react';

export default class Comic extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="well">
                <img
                    src={this.props.comic.thumbnail.path + '/portrait_xlarge.' + this.props.comic.thumbnail.extension}
                    alt={this.props.comic.title}/>
                <h3><strong>Name:</strong> {this.props.comic.title}</h3>
                <h3><strong>Description: </strong> {this.props.comic.description }</h3>
                <a href="javascript:;">Details</a>
            </div>
        )
    }
}
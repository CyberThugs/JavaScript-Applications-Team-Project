import React, {Component} from 'react';

import Comic from '../comic/Comic'

export default class ComicsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.comics);
        return (
            <div className="well">
                {
                    this.props.comics.map(comic => {
                        return <Comic key={comic.id} comic={comic} />
                    })
                }
            </div>
        )
    }
}
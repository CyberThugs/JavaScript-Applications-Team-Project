import React, { Component } from 'react';

export default class ComicsSearchForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('onSubmit()');
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <form onSubmit={this.onSubmit}>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" id="comic-name" ref="name"/>
                            </div>
                            <div className="form-group">
                                <button>Search</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}
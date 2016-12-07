import React, {Component} from 'react';

const style = {
    width: '400px',
    height: '500px',
    overflow: 'auto'
};

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
        console.log(this.props.comics);
        return (
            <div>
                <h1>Search Comics</h1>
                <div className="panel panel-default">
                    <form onSubmit={this.onSubmit}>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" id="comic-name" ref="name"/>
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
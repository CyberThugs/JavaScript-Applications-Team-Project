import React, { Component } from 'react';
import { connect } from 'react-redux';

import ComicsSearchForm from '../../components/comics-search-form/ComicsSearchForm';
import ComicsList from "../../components/comics-list/ComicsList";

class ComicsSearchPage extends Component {
    render() {

        console.log(this.props.comics);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ComicsSearchForm />
                        <ComicsList comics={this.props.comics.comics}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ComicsSearchPage);

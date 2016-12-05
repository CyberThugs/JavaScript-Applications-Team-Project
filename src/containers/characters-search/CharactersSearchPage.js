import React, { Component } from 'react';
import { connect } from 'react-redux';

import ComicsSearchForm from '../../components/characters-search-form/CharactersSearchForm';

class CharactersSearchPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ComicsSearchForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(CharactersSearchPage);



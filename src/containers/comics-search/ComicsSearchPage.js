import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ComicsSearchForm from '../../components/comics-search-form/ComicsSearchForm';

class ComicsSearchPage extends Component {
    render() {
        return (
            <ComicsSearchForm />
        )
    }
}


const mapStateToProps = (state) => {
    const { location } = state;
    return {
        location: location ? location.location : null,
    };
};


export default connect(mapStateToProps)(ComicsSearchPage);



import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/Header';

import About from '../about/About';
import Home from '../home/Home';
import ComicsSearchPage from '../comics-search/ComicsSearchPage';

import { handleLocation } from '../../actions/location';

import './app.css';

class App extends Component {

    handleLogout() {

    }

    render() {

        const { user } = this.props;
        return (
            <div className="container">
                <Header location={this.props.location} user={user} handleLogout={() => this.handleLogout()}/>
                {this.props.location == "about" ? <About/> : null}
                {this.props.location == "home" ? <Home/> : null}
                {this.props.location == "comics-search" ? <ComicsSearchPage/> : null}

            </div>
        );
    }
}

App.propTypes = {
    location: PropTypes.string
};

App.contextTypes = {
    store: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const { location } = state;
    return {
        location: location ? location.location : null,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleLocation: (currentLocation) => {
            dispatch(handleLocation(currentLocation))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

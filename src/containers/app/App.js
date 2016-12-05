import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import About from '../about/About';
import Home from '../home/Home';
import ComicsSearchPage from '../comics-search/ComicsSearchPage';
import LoginPage from '../login-page/LoginPage';
import RegisterPage from '../register-page/RegisterPage';


import Background from '../../components/background/Background';

const createHistory = require('history/createBrowserHistory').default;
const history = createHistory();
import { handleLocation } from '../../actions/location';

import './app.css';


class App extends Component {
    static history = history;

    componentWillMount() {
        this._unlisten = history.listen((location, action) => {
            this.props.handleLocation(location.pathname);
            history.push(location.pathname);
        })
    }

    handleLogout() {

    }

    componentWillUnmount() {
        this._unlisten && this._unlisten();
        this._unlisten = null;
    }

    render() {
        console.log(history);
        const { user } = this.props;
        return (
            <div className="container">
                <Header location={this.props.location} user={user} handleLocation={this.props.handleLocation} handleLogout={() => this.handleLogout()}/>
                {this.props.location === "about" ? <About/> : null}
                {this.props.location === "/" ? <Home/> : null}
                {this.props.location === "comics-search" ? <ComicsSearchPage/> : null}
                {this.props.location === "login" ? <LoginPage/> : null}
                {this.props.location === "register" ? <RegisterPage/> : null}
                <Footer/>

                <Background />
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

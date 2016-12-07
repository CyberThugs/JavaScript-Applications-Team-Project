import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import About from '../about/About';
import Home from '../home/Home';
import CharactersSearchPage from '../characters-search/CharactersSearchPage';
import ComicsSearchPage from '../comics-search/ComicsSearchPage';
import LoginPage from '../login-page/LoginPage';
import RegisterPage from '../register-page/RegisterPage';


import Background from '../../components/background/Background';

import Api from '../../lib/Api';

let appApi = new Api();

const createHistory = require('history/createBrowserHistory').default;
const history = createHistory();
import {handleLocation} from '../../actions/location';
import {handleCharacters} from '../../actions/characters';
import {handleComics} from '../../actions/comics';
import {handleCharacterSearch} from '../../actions/characterSearch';


import KinveyRequester from '../../lib/KinveyRequester';


class App extends Component {
    static history = history;

    constructor(props, context) {
        super(props, context);

        this.characters = this.characters.bind(this);
        this.comics = this.comics.bind(this);

        this.state = {
            user: {
                username: sessionStorage.getItem("username"),
                userId: sessionStorage.getItem("userId")
            }

        };
    }

    componentWillMount() {
        this._unlisten = history.listen((location, action) => {
            this.props.handleLocation(location.pathname);
            history.push(location.pathname);
        });

        appApi.getCharacters(this.characters);
        appApi.getComics(this.comics)
    }

    handleLogout() {

    }

    componentWillUnmount() {
        this._unlisten && this._unlisten();
        this._unlisten = null;
    }

    render() {
        const {user} = this.props;
        return (
            <div className="container">
                <Header location={this.props.location} user={user} handleLocation={this.props.handleLocation}
                        handleLogout={() => this.handleLogout()}/>
                {this.props.location === "about" ? <About/> : null}
                {this.props.location === "/" ? <Home/> : null}
                {this.props.location === "characters-search" ?
                    <CharactersSearchPage character={this.props.characterSearchResult}
                                          handleCharacterSearch={this.props.handleCharacterSearch}/> : null}
                {this.props.location === "comics-search" ? <ComicsSearchPage comics={this.props.comics}/> : null}
                {this.props.location === "login" ? <LoginPage onsubmit={this.login.bind(this)}/> : null}
                {this.props.location === "register" ? <RegisterPage onsubmit={this.register.bind(this)}/> : null}
                {this.props.location === "logout" ? this.logout() : null}
                <Footer/>

                <Background />
            </div>
        );
    }

    logout(){
        sessionStorage.clear();
        this.props.handleLocation("/");

    }
    login(username, password) {
        KinveyRequester.loginUser(username, password)
            .then(success.bind(this));

        function success(userInfo) {
            this.saveAuthInSession(userInfo);
            console.log("Here");
            this.props.handleLocation("/");
        }
    }

    register(username, password) {

        KinveyRequester.registerUser(username, password)
            .then(success.bind(this));

        function success(userInfo) {
            this.saveAuthInSession(userInfo);
            this.props.handleLocation("/");
        }
    }

    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        // This will update the entire app UI (e.g. the navigation bar)
        this.setState({
            user: {
                username: userInfo.username,
                userId: userInfo._id
            }
        });
    }

    characters(error, result) {
        if (typeof error === 'undefined') error = null;
        if (typeof result === 'undefined') result = null;

        if (error) {
            throw new Error();
        }

        if (result) {
            console.log(result);
            this.props.handleCharacters(result.results)
        }

    }

    comics(error, result) {
        if (typeof error === 'undefined') error = null;
        if (typeof result === 'undefined') result = null;

        if (error) {
            throw new Error();
        }

        if (result) {
            console.log('----------------');
            console.log(result);
            console.log('----------------');

            this.props.handleComics(result.results)
        }

    }
}

App.propTypes = {
    location: PropTypes.string
};

App.contextTypes = {
    store: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const {location, characters, comics, characterSearch    } = state;
    return {
        location: location ? location.location : null,
        characters: characters || null,
        characterSearch: characterSearch || null,
        comics: comics || null
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleLocation: (currentLocation) => {
            dispatch(handleLocation(currentLocation))
        },

        handleCharacters: (characters) => {
            dispatch(handleCharacters(characters))
        },

        handleCharacterSearch: (character) => {
            dispatch(handleCharacterSearch(character))
        },

        handleComics: (comics) => {
            dispatch(handleComics(comics))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

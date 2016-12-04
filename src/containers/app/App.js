import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/Header';

import { handleLocation } from '../../actions/location';

import './app.css';

class App extends Component {

    handleLogout() {

    }

    render() {
        console.log(
            this.props
        )
        const { user } = this.props;
        return (
            <div className="container">
                <Header location={this.props.location} user={user} handleLogout={() => this.handleLogout()}/>
                {this.props.location == "About" ? <div>mneshto</div> : null}
                {this.props.location == "home" ? <div className="container appContent">
                    <button onClick={this.props.handleLocation.bind(null,"About")}>ChanceLocation</button>
                </div> : null}
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

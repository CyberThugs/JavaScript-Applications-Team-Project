import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import UserProfile from './UserProfile';
import Alerts from './Alerts';
import './header.css';
import { connect } from 'react-redux';


import { handleLocation } from '../../actions/location';


class Header extends Component {
    constructor(props) {
        super(props);

    }

    onLogoutClick = (event) => {
        event.preventDefault();
        this.props.handleLogout();
    };

    render() {

        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"home")}>
                            Marvel Vault
                        </a>
                    </li>

                    <li>
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"about")}>About</a>
                    </li>
                    <li>
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"comics-search")}>Search Comics</a>
                    </li>


                </ul>
            </div>
        );
    }

}

Header.propTypes = {};

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
)(Header);

import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import UserProfile from './UserProfile';
import Alerts from './Alerts';
import './header.css';

export default class Header extends Component {
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
                        <a href="#">
                            Start Bootstrap
                        </a>
                    </li>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Shortcuts</a>
                    </li>
                    <li>
                        <a href="#">Overview</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>

                </ul>
            </div>
        );
    }

}

Header.propTypes = {};

import React, { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';

class Header extends Component {

    onLogoutClick = (event) => {
        event.preventDefault();
        this.props.handleLogout();
    };

    render() {

        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"/")}>
                            Marvel Vault
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"about")}>About</a>
                    </li>
                    <li>
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"characters-search")}>Search Characters</a>
                    </li>
                    <li>
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"comics-search")}>Search Comics</a>
                    </li>

                    {sessionStorage.length == 0 ? <div>
                        <li>
                            <a href="javascript:;" onClick={this.props.handleLocation.bind(null, "login")}>Login</a>
                        </li>
                        <li>
                            <a href="javascript:;"
                               onClick={this.props.handleLocation.bind(null, "register")}>Register</a>
                        </li>
                    </div>
                        : <li>
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null, "logout")}>Logout</a>
                    </li>
                    }

                </ul>
            </div>
        );
    }

}

export default connect(
)(Header);

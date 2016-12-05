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
                    <li>
                        <a href="javascript:;" onClick={this.props.handleLocation.bind(null,"login-page")}>Login</a>
                    </li>
                </ul>
            </div>
        );
    }

}

export default connect(
)(Header);

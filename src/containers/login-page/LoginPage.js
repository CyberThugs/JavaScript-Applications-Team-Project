import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-3">
                        <form className="login-form" onSubmit={this.submitForm.bind(this)}>
                            <h1>Login</h1>
                            <label>
                                <div>Username:</div>
                                <input type="text" name="username" required
                                       ref={e => this.usernameField = e} />
                            </label>
                            <label>
                                <div>Password:</div>
                                <input type="password" name="password" required
                                       ref={e => this.passwordField = e} />
                            </label>
                            <div>
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    submitForm(event) {
        event.preventDefault();
        event.stopPropagation();

        this.props.onsubmit(
            this.usernameField.value, this.passwordField.value);
    }
}

export default connect()(LoginPage);



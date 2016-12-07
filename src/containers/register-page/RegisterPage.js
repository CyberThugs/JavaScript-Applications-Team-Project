import React, { Component } from 'react';
import { connect } from 'react-redux';


class RegisterPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-3">
                        <form className="register-form" onSubmit={this.submitForm.bind(this)}>
                            <h1>Register</h1>
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
                            <label>
                                <div>Confirm Password:</div>
                                <input type="password" name="confirmPassw" required
                                       ref={e => this.confirmPasswordField = e} />
                            </label>
                            <div>
                                <input type="submit" value="Register" />
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
            this.usernameField.value, this.passwordField.value, this.confirmPasswordField.value);
    }
}

export default connect()(RegisterPage);
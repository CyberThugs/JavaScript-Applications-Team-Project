import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/login-form/LoginForm';

class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-3">
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(LoginPage);


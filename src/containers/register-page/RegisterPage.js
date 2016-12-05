import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../../components/register-form/RegisterForm';

class RegisterPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-3">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(RegisterPage);
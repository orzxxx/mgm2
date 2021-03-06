import React, {Component} from 'react'
import { reduxForm } from 'redux-form'
import {Link} from 'react-router'
import '../node_modules/admin-lte/plugins/iCheck/icheck'
import '../node_modules/admin-lte/plugins/iCheck/square/blue.css'

import * as Validator from '../common/validation'

export const fields = ['mchntName', 'passwd', 'rePasswd'];

const validate = values => {
    const errors = {};
    //errors.mchntName = Validator.required(values.mchntName);
    errors.mchntName = Validator.createValidator([Validator.required, Validator.maxLength(10)])(values.mchntName);

    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}

class Register extends Component{
    componentDidMount = () => {
        $('body').removeClass().addClass('hold-transition register-page');

        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    };

    doRegister = (e) => {
        e.preventDefault();

        var formData = new FormData(document.querySelector("#register"));
        return fetch('/register', {
            method: 'POST',
            body: formData})
            .then(res => res.json())
            .then(result => {
                if(result.code == "0"){

                }
            }).catch(err => alert('连接超时'))
    };

    render() {
        const { fields: {mchntName}, resetForm, handleSubmit, submitting } = this.props

        return (
            <div className="register-box">
                <div className="register-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>

                <div className="register-box-body">
                    <p className="login-box-msg">Register a new membership</p>

                    <form id="register" method="post">
                        <div className="form-group has-feedback">
                            {mchntName.touched && mchntName.error && <div>{mchntName.error}</div>}
                            <input type="text" className="form-control" placeholder="Full name" {...mchntName}/>
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" name="passwd"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Retype password" name="rePasswd"/>
                                <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox"/> I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.doRegister}>Register</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
                            Google+</a>
                    </div>

                    <a href="login.html" className="text-center">I already have a membership</a>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'register',
    fields,
    validate
})(Register)
import React, {Component} from 'react'
import {Link} from 'react-router'
import '../node_modules/admin-lte/plugins/iCheck/icheck'
import '../node_modules/admin-lte/plugins/iCheck/square/blue.css'

export default class Login extends Component{
    componentDidMount = () => {
        $('body').removeClass().addClass('hold-transition login-page');

        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    };

    doLogin = (e) => {
        e.preventDefault();

        const userId = this.refs.userId.value;
        const password = this.refs.password.value;

        var formData = new FormData();
        formData.append('userId', userId);
        formData.append('password', password);
        return fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },　
            body: formData})
            .then(res => res.json())
            .then(result => {
                if(result.code == "0"){

                }
            }).catch(err => alert(err))
    };

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form method="post">
                        <div className="form-group has-feedback">
                            <input ref="userId" type="text" className="form-control" placeholder="Mobile"/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input ref="password" type="password" className="form-control" placeholder="Password"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox"/> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.doLogin}>Sign In</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
                            Google+</a>
                    </div>
                    <Link to="/">I forgot my password</Link><br/>
                    <Link className="text-center" to="/register">Register a new membership</Link>

                </div>
            </div>
        )
    }
}
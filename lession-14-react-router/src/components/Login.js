import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: '',
        }
    }

    getUserInfo = e => {
        const target = e.target;
        const value = target.value;
        const name = (target.name === 'checkbox') ? target.checked : target.name;

        this.setState({
            [name]: value
        });
    }

    onLogin = e => {
        e.preventDefault();
        const { txtUserName, txtPassword } = this.state;
        localStorage.setItem('user', JSON.stringify({
            userName: txtUserName,
            password: txtPassword
        }))


    }

    render() {
        const { txtUserName, txtPassword } = this.state;
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            const { location } = this.props;
            return <Redirect to={{
                pathname: '/products',
                state: {
                    from: location
                },
            }} />
        }



        return (
            <div >
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onLogin}>
                            <legend>Form Login</legend>

                            <div className="form-group">
                                <label>userName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='txtUserName'
                                    value={txtUserName}
                                    onChange={this.getUserInfo}
                                />
                            </div>

                            <div className="form-group">
                                <label>password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='txtPassword'
                                    value={txtPassword}
                                    onChange={this.getUserInfo}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                onSubmit={this.onLogin}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
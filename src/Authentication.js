import GoogleLogin from 'react-google-login';
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage'
import Axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Authentication extends React.Component {
    constructor() {
        super();
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    responseGoogle(response) {
        console.log(response);
        let token = response.profileObj.email;
        ReactDOM.render(<Homepage user={token} />, document.getElementById('root'));
    }
    render() {
        return (
            <nav>
                <nav class="navbar bg-primary text-center p-10">
                    <div class="container-fluid">
                        <h3>Sign In to create dynamic forms</h3>
                    </div>
                </nav >
                <nav >
                    <GoogleLogin className="btn-primary"
                        clientId="731097053412-odill1n1o650g2pvcb00cjnqn9gcof39.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </nav>
            </nav>
        );
    }

}
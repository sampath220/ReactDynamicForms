import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login';
import Authentication from './Authentication'
import { Redirect } from 'react-router-dom'
export default class Logout extends Component {
    state={isLogout:false}
    render() {
        return (
            <div >
                <GoogleLogout className="btn-primary"
                    clientId="731097053412-odill1n1o650g2pvcb00cjnqn9gcof39.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={(this.logout.bind(this))}
                >
                </GoogleLogout>
                {this.state.isLogout && <Redirect to="/"/>}
            </div>
        )
    }
    logout=()=>{
        this.setState({isLogout:true})
    }
}

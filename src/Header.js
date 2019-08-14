import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-inverse">
                    <div class="container-fluid">
                        <ul class="nav navbar-nav">
                            <li><Link to="/createform">createform</Link></li>
                            <li><Link to="/preview">previous forms</Link></li>

                        </ul>
                        <ul>
                            <li class="nav navbar-nav navbar-right"><Logout /></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

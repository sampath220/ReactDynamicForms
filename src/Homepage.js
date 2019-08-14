import React, { Component } from 'react'
import CreateForm from './CreateForm'
import Preview from './Preview'

import Header from './Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Homepage extends Component {
    render() {
        return (
            <Router>
                    <Header/>
                    <Route exact path="/" Component={Homepage}/>
                    <Route exact path='/createform' render={(props) => <CreateForm {...this.props} />}/>
                    <Route exact path='/preview' render={(props) => <Preview {...this.props} />} />
                    
            </Router>
        )
    }
}
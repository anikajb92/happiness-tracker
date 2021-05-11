import './App.css'
import React, { Component } from 'react'
import {BrowserRouter, Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Form from './components/Form'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route 
              exact path="/"
              component={Home}
            />
            <Route path="/form">
              <Form />
            </Route> 
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
    )
  }
}


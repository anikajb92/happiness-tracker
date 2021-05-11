import './App.css'
import React, { Component } from 'react'
import {BrowserRouter, Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Calendar from './components/Calendar'

export default class App extends Component {

  state = {

  }

  login = (name) => {
    return fetch('http://localhost:9393/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name
      })
    })
    .then(response => response.json())
    .then(results => {
      if(results.error){
        alert(results.error)
      }
      else{
        this.setState({
          user: results
        })
      }
      return results
    })
  }

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
            <Route
              path="/calendar"
              render={() =>
                <Calendar
                  
                />
              }
            /> 
            <Route 
              path="/login"
              render={() =>
                <Login 
                  login={this.login}
                />
              }  
            />
          </Switch>
        </div>
    </BrowserRouter>
    )
  }
}


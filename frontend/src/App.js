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
    user: {}
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
        localStorage.setItem("id", results.id)
      }
      return results
    })
  }

  render() {
    return (
        <div>
          <Navbar />
          <Switch>
            <Route 
              exact path="/"
              render={() => 
                <Home
                  user={this.state.user}
                />
              }
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
              render={(routerprops) =>
                <Login 
                  login={this.login}
                  {...routerprops}
                />
              }  
            />
          </Switch>
        </div>
    )
  }
}


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
    user: {},
    selectedDate: null
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

  selectDate = (click) => {
    console.log("calendar was clicked", click)
    if (click.value){
      this.setState({
        selectedDate: click.value
      })
    }
  }

  render() {
    return (
        <div className="container">
          <Navbar />
          <div >
          <Switch>
            <Route 
              exact path="/"
              render={() => 
                <Home
                  user={this.state.user}
                  selectedDate={this.state.selectedDate}
                />
              }
            />
            <Route
              path="/calendar"
              render={() =>
                <Calendar
                  selectDate={this.selectDate}
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
        </div>
    )
  }
}


import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Router, Switch, Route, Link} from 'react-router-dom';

import Welcome from './components/Welcome';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Calendar from './components/Calendar';
import Analysis from './components/Analysis';

export default class App extends Component {

  state = {
    user: {},
    selectedDate: null,
    isLoggedIn: false
  }

  componentDidMount() {
    const name = localStorage.name
    if (name) {
      this.login(name)
    }
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
        console.log(results.error)
      }
      else{
        this.setState({
          user: results,
          isLoggedIn: true
        })
        localStorage.setItem("name", results.name) // will keep user logged in upon refresh
        localStorage.setItem("id", results.id)
      }
      return results
    })
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      user: [],
      isLoggedIn: false
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
        <div className="boxContainer">
            <Welcome 
              user={this.state.user}
              isLoggedIn={this.state.isLoggedIn}
            />
            <div className="common">
              <Switch>
              {this.state.isLoggedIn? (
                <>
                <Route 
                  exact path="/"
                  render={() => 
                    <Home
                      user={this.state.user}
                      selectDate={this.selectDate}
                      selectedDate={this.state.selectedDate}
                    />
                  }
                />
                <Route
                  path="/calendar"
                  render={(routerprops) =>
                    <Calendar
                      selectDate={this.selectDate}
                      {...routerprops}
                    />
                  }
                /> 
                <Route
                  path="/analysis"
                  render={() =>
                    <Analysis
                      selectDate={this.selectDate}
                    />
                  }
                /> 
                <Route 
                  path="/form"
                  render={(routerprops) =>
                    <Form 
                    user={this.state.user}
                    selectedDate={this.state.selectedDate}
                    selectDate={this.selectDate}
                    {...routerprops}
                    />
                  }  
                />
                <Route 
                  path="/login"
                  render={(routerprops) =>
                    <Login 
                      login={this.login}
                      user={this.state.user}
                      isLoggedIn={this.state.isLoggedIn}
                      logout={this.logout}
                      {...routerprops}
                    />
                  }  
                />
              </>) : (
                <Route 
                  path="/login"
                  render={(routerprops) =>
                    <Login 
                      login={this.login}
                      user={this.state.user}
                      isLoggedIn={this.state.isLoggedIn}
                      logout={this.logout}
                      {...routerprops}
                    />
                  }  
                />
              )}
              </Switch>
              </div>
              <Navbar isLoggedIn={this.state.isLoggedIn}/>
        </div>
    )
  }
}


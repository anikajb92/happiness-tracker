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
        <div className="boxContainer">
            <Welcome user={this.state.user}/>
            <div className="common">
            <Switch>
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
                path="/login"
                render={(routerprops) =>
                  <Login 
                    login={this.login}
                    {...routerprops}
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
                  />
                }  
              />
            </Switch>
            </div>
            <Navbar />
        </div>
    )
  }
}


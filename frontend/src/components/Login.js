import React, { Component } from 'react'
import Yogi from '../images/yogi.png'

export default class Login extends Component {

  state = {
    name: "",
    error: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    if(this.props.isLoggedIn){
      this.props.logout()
    }
    else {
      event.preventDefault();
      this.props.login(this.state.name)
        .then(response => {
          if(response.id){
            this.props.history.push('/calendar')
          }
          else {
            this.setState({
              error: response.error
            })
        }
      })
    }
  }

  render() {
    return (
      <div className="login">
        <div className="yogibox">
          <img className="yogi" src={Yogi} alt="yogi"></img>
        </div>
        <div className="loginform">
          {this.props.isLoggedIn? (
          <>
            <br/>
            You are logged in as {this.props.user.name}.
          </>) : (
            <h3 style={{display:"flex", justifyContent:"center"}}>Please Enter Your Full Name</h3>
          )}
            <form id="loginName"
              className="form"
              onSubmit={this.handleSubmit}
            >
              {this.props.isLoggedIn? (
                <>
                  Thanks for being here!
                </>) : (
                  <input  
                    type="text"
                    name="name"
                    placeholder="First and Last"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                )}
              <input 
                id="loginSubmit"
                className="button"
                type="submit"
                value={this.props.isLoggedIn? "Sign Out" : "Sign In"}
              />
            </form>
          {this.state.error ? <p style={{color:"red", display:"flex", flexWrap:"wrap" }}>{this.state.error}</p> : null}
        </div>
      </div>
    )
  }
}
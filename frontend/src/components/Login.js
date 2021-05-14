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

  render() {
    return (
      <div className="login">
        <img className="yogi" src={Yogi} alt="yogi"></img>
        <h3 style={{display:"flex", justifyContent:"center"}}>Please Enter Your Full Name</h3>
        <form id="loginName"
          className="form"
          onSubmit={this.handleSubmit}
        >
          <input  
            type="text"
            name="name"
            placeholder="First and Last"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            id="loginSubmit"
            className="button"
            type="submit"
            value="Sign In" 
          />
        </form>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </div>
    )
  }
}
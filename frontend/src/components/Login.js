import React, { Component } from 'react'

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
        <p>Please Enter Your Full Name</p>
        <form 
          className="form"
          onSubmit={this.handleSubmit}
        >
          <input  
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            className="button"
            type="submit" 
          />
        </form>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </div>
    )
  }
}
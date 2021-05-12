import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    values: {
      date: "",
      mood: 0,
      meditation: [],
      workout: null,
      creative: null,
      weather: null,
      sleep: 0
    }
  }

  handleChange = (event) => {
    this.setState({
      values: {...this.state.values, 
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.values);
    fetch('http://localhost:9393/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.values)
    })
  }

  render() {
    console.log(this.state.date)
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
           <label> Entry Date:
            <input 
              type="date" 
              name="date" 
              value={this.state.values.date}
              onChange={this.handleChange}
            ></input>
          </label>
          <br/>
          <label> Overall mood?
            <input 
              type="range"
              min="0"
              max="10"
              name="mood" 
              value={this.state.values.mood}
              onChange={this.handleChange}
            ></input>
          </label>
          <br/>
          <label> Did you meditate today?
            <select name="meditation" value={this.state.values.meditation} onChange={this.handleChange}>
              <option selected value="null">Please select an answer</option>
              <option value="true">Yes, I'm zen</option>
              <option value="false">No</option>
            </select>
          </label>
          <br/>
          <label> Did you workout today?
            <select name="workout" value={this.state.values.workout} onChange={this.handleChange}>
              <option selected value="null">Please select an answer</option>
              <option value="true">Yes, I'm sweaty</option>
              <option value="false">No</option>
            </select>
          </label>
          <br/>
          <label> How was the weather?
            <input 
              type="number" 
              name="weather" 
              value={this.state.values.weather}
              onChange={this.handleChange}
            ></input>
          </label>
          <br/>
          <label> Were you creative today?
          <select name="creative" value={this.state.values.creative} onChange={this.handleChange}>
              <option selected value="null">Please select an answer</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br/>
          <label> How many hours of sleep did you get last night?
            <input 
              type="number" 
              min="0"
              max="12"
              name="sleep" 
              value={this.state.values.sleep}
              onChange={this.handleChange}
            ></input>
          </label>
          <br/>
        <input type="submit" />
      </form>
      </div>
    )
  }
}

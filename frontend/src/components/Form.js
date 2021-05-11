import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    date: "",
    mood: "",
    meditation: null,
    workout: null,
    creative: null,
    weather: null,
    sleep: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event) 
    //redirect to home page
  }

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
           <label> Entry Date:
            <input 
              type="date" 
              name="Date" 
              value={this.state.date}
              onChange={this.handleChange}
            ></input>
          </label>
          <br/>
          <label> Overall mood?
            <input 
              type="range"
              min="1"
              max="10"
              name="Mood" 
              value={this.state.mood}
            ></input>
          </label>
          <br/>
          <label> Did you meditate today?
            <select name="Meditation" value={this.state.meditate} onChange={this.handleChange}>
              <option selected value="null">Please select an answer</option>
              <option value="Yes">Yes, I'm zen</option>
              <option value="No">No</option>
            </select>
          </label>
          <br/>
          <label> Did you workout today?
            <select name="Workout" value={this.state.workout} onChange={this.handleChange}>
              <option selected value="null">Please select an answer</option>
              <option value="Yes">Yes, I'm sweaty</option>
              <option value="No">No</option>
            </select>
          </label>
          <br/>
          <label> How was the weather?
            <input 
              type="range" 
              name="Weather" 
              value={this.state.weather}
            ></input>
          </label>
          <br/>
          <label> Were you creative today?
          <select name="Creative" value={this.state.creative} onChange={this.handleChange}>
              <option selected value="null">Please select an answer</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <br/>
          <label> How many hours of sleep did you get last night?
            <input 
              type="number" 
              min="0"
              max="12"
              name="Sleep" 
              value={this.state.sleep}
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

import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    values: {
      date: "mm/dd/yyyy",
      mood: 5,
      meditation: [],
      workout: null,
      creative: null,
      social: null,
      weather: 5,
      sleep: 5
    }
  }

  componentDidMount() {
    const date = new Date(this.props.selectedDate)
    const month = (date.getMonth() + 1) < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = (date.getDate()) < 9 ? `0${date.getDate()}` : date.getDate()
    const formattedDate = `${date.getFullYear()}-${month}-${day}`

    this.setState({
      values: {...this.state.values, date: formattedDate}
    })
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
    console.log("form values logged as", this.state.values);
    fetch('http://localhost:9393/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({...this.state.values, user_id: localStorage.id})
    })
    .then(response => response.json())
    .then(results => {
      this.props.history.push('/analysis')
    })
  }

  render() {
    console.log(this.state.date)
    return (
      <div>
        <form 
          className="form"
          onSubmit={this.handleSubmit}
        >
           <label> Entry Date:
            <input 
              type="date" 
              name="date" 
              className="placeholder"
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
              <option selected value="null">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br/>
          <label> Did you workout today?  
            <select name="workout" value={this.state.values.workout} onChange={this.handleChange}>
              <option selected value="null">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br/>
          <label> How was the weather?
            <input 
              type="range" 
              min="0"
              max="10"
              name="weather" 
              value={this.state.values.weather}
              onChange={this.handleChange}
            ></input>
          </label>
          <br/>
          <label> Were you creative today?  
          <select name="creative" value={this.state.values.creative} onChange={this.handleChange}>
            <option selected value="null">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
            </select>
          </label>
          <br/>
          <label> Were you social today?  
          <select name="social" value={this.state.values.social} onChange={this.handleChange}>
            <option selected value="null">Select</option>
            <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br/>
          <label> How many hours of sleep did you get last night?
            <input 
              type="range" 
              min="0"
              max="12"
              name="sleep" 
              value={this.state.values.sleep}
              onChange={this.handleChange}
            ></input>
          </label>
          <br/>
        <input 
          className="button"
          type="submit" 
        />
      </form>
      </div>
    )
  }
}

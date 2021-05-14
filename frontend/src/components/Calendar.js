import React from 'react'
import '../Calendar.css'
import {Component} from 'react'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';

export default class Calendar extends Component {
  
  state = {
    dates: []
  }

  componentDidMount() {
    fetch("http://localhost:9393/dates")
      .then(response => response.json())
      .then(dates => {
        const newDates = dates.map(date => new Date(date))
        this.setState({
          dates: newDates
        })
      })
  }

  handleClick = () => {
    this.props.history.push('/form')
  }

render() {
  return (
    <div className="calendar">
      {/* <h1> Calendar Here </h1> */}
      <CalendarComponent 
        values={this.state.dates}
        isMultiSelection={true}
        change={this.props.selectDate}
        onClick={this.handleClick}
      />
      <div className="quotebox">
        <div className="quote">
          <h4><em>"Every day can be a celebration"</em></h4>
          <h4><em>"Make time to do the things you love"</em></h4>
        </div>
      </div>
    </div>
  )
}
}

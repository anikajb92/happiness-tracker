import React from 'react'
import '../Calendar.css'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';

export default function Calendar() {

  const getData = () => {
    fetch("http://localhost:9393/dates")
      .then(response => response.json())
      .then(dates => {

      })
  }
  
  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 11);

  return (
    <div>
      {getData()}
      <h1> Calendar Here </h1>
      <CalendarComponent 
        value={dateValue}
        isMultiSelection={true}
      />
    </div>
  )
}

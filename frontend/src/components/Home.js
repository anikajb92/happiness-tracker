import React from 'react';
import Form from './Form';
import Calendar from './Calendar';
import Analysis from './Analysis';

export default function Home(props) {
  return (
    <div>
      <p>CALENDAR </p>
      <Calendar selectDate={props.selectDate}/>
      <p>FORM</p>
      <Form selectedDate={props.selectedDate}/>
      <p>ANALYSIS </p>
      <Analysis selectedDate={props.selectedDate}/>
    </div>
  )
}
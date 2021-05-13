import React from 'react';
import Form from './Form';
import Calendar from './Calendar';
import Analysis from './Analysis';

export default function Home(props) {
  return (
    <div>
      <p>Find Your Happy</p>
      <p>HOME</p>
      <h1>Welcome, Anika Bernstein</h1> 
      <br/>
      <p>FORM</p>
      <Form selectedDate={props.selectedDate}/>
      <p>CALENDAR </p>
      <Calendar selectDate={props.selectDate}/>
      <p>ANALYSIS </p>
      <Analysis selectedDate={props.selectedDate}/>
    </div>
  )
}
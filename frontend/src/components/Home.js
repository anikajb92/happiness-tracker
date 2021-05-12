import React from 'react'
import Form from './Form'

export default function Home(props) {
  return (
    <div>
      <p>HOME</p>
      <Form selectedDate={props.selectedDate}/>
    </div>
  )
}
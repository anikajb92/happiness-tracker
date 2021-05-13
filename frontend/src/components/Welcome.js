import React from 'react'

export default function Welcome(props) {
  return (
      <div className="topContainer">
        <div className="yellowBackDrop"></div>
        <h3>{props.user.name}</h3>
        <div className="welcomeHeader">
          <h2 className="welcomeHeaderText">Welcome To Bliss</h2> 
        </div>
      </div>
  )
}

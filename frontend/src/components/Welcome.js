import React from 'react';
import {BsPersonCheck} from 'react-icons/bs';

export default function Welcome(props) {

  console.log(props);

  return (
      <div className="topContainer">
        <div className="yellowBackDrop"></div>
        <div className="welcomeHeader">
        {props.isLoggedIn? (
          <>
            <h6><BsPersonCheck className="logo"/> Anika Bernstein</h6>
          </>) : (<h6>Log In</h6>)}
          <h2 className="welcomeHeaderText">Welcome To</h2> 
          <span id="headerSpan" className="welcomeHeaderText">Bliss</span>
        </div>
      </div>
  )
}

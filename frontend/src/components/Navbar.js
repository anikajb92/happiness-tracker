import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';

export default function NavBar(props) {

  return (
    <div>
      <div className="yellow">
        <div className="navHeader">
          <h1 className="navHeaderText">Welcome</h1>
          <h2 className="navSubHeader">Please sign-in to continue</h2>
        </div>
      </div>
      <nav id="navbar" >
        <Link className="link" to="/login">Login</Link>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/calendar">Calendar</Link>
        <Link className="link" to="/analysis">Learn</Link>
      </nav>
    </div>
  );
}
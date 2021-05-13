import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';

export default function NavBar(props) {

  return (
    <nav id="navbar">
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/analysis">Learn</Link>
    </nav>
  );
}
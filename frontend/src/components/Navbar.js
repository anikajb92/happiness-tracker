import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';

export default function NavBar(props) {

  return (
    <nav id="navbar">
      <h1 className="logo">Bliss</h1>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="/calendar">Calendar</Link>
    </nav>
  );
}
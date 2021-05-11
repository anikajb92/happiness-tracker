import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function NavBar(props) {

  return (
    <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            
          </ul>
        </nav>
  );
}
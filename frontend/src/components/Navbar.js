import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function NavBar(props) {

  return (
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
  );
}
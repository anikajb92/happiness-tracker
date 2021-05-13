import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';
import { BiCalendarHeart } from 'react-icons/bi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { IoMdLogIn } from 'react-icons/io';
import { AiOutlineForm } from 'react-icons/ai';


export default function NavBar(props) {

  return (
    <div className="navsection">
      <nav id="navbar" >
        <Link className="link" to="/login"><IoMdLogIn size={30} className="icon"/></Link>
        {/* <Link className="link" to="/">Home</Link> */}
        <Link className="link" to="/calendar" ><BiCalendarHeart size={30} className="iconc"/></Link>
        <Link className="link" to="/form"><AiOutlineForm size={30} className="iconc" /></Link>
        <Link className="link" to="/analysis"><AiOutlinePieChart size={30} className="icon"/></Link>
      </nav>
    </div>
  );
}


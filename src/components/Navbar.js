import React, { Component } from 'react';
import Time from './Time'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navb from '../css/Navb.css';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <span >
          <Link to="/">Home</Link> |
          <Link to="Wireframe">Wireframe</Link> |
          <Link to="daily">Daily</Link> |
          <Link to="weekly">Weekly</Link>
         
        </span>
        
        <Time />
      </div>

    );
  }
}

export default Navbar
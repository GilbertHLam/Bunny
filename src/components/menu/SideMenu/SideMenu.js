import React, { Component } from 'react';
import './SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <div className='sideMenu'>
        <div><a>Play</a></div>
        <div><a>Log In</a></div>
        <div><a>Sign Up</a></div>
        <div><a>About</a></div>
        <div><a>Top Scores</a></div>
      </div>
    );
  }
}

export default SideMenu;

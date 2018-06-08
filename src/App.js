import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/menu/SideMenu/SideMenu';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <SideMenu />
      </div>
    );
  }
}

export default App;

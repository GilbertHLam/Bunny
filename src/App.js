import React, { Component } from 'react';
import './App.css';
import Home from './components/views/home/Home';
import { Route } from 'react-router-dom';
import Play from './components/views/play/Play';
import Score from './components/views/score/Score';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Route exact path="/" component={Home} />
				<Route path="/play" component={Play} />
				<Route path="/score" component={Score} />
			</div>
		);
	}
}

export default App;

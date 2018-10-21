import React, { Component } from 'react';
import GameBoard from '../../gameBoard/GameBoard';
import './Play.css';

class Play extends Component {

	
	render() {
		return (
			<div className='play'>
				<GameBoard />
			</div>
		);
	}
}

export default Play;

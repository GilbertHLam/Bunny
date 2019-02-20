import React, { Component } from 'react';
import GameBoard from '../../gameBoard/GameBoard';
import { CanvasModel } from '../../gameBoard/CanvasModel';
import './Play.css';

class Play extends Component {

	constructor(props){
		super(props);
		this.canvasModel = CanvasModel.create({
			brushColor: 'Black',
			lineWidth: 3
		});
	}
	
	render() {
		return (
			<div className='play'>
				<GameBoard 
					canvasModel={this.canvasModel}
				/>
			</div>
		);
	}
}

export default Play;

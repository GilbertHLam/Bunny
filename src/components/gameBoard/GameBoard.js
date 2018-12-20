import React, { Component } from 'react';
import './GameBoard.css';
import Timer from '../timer/Timer';
import { TimerModel } from '../timer/TimerModel';
import { CanvasModel } from '../gameBoard/CanvasModel';
import ImperfectButton from '../buttons/ImperfectButton';
import Canvas from './Canvas';
import classNames from 'classnames';

import PropTypes from 'prop-types';

class GameBoard extends Component {

	constructor(props) {
		super(props);
		this.state = { buttonDisabled: false }
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onTimerEnd = this.onTimerEnd.bind(this);
		this.timerModel = TimerModel.create({
			timeLimit: 60,
			timerOn: false,
			onTimerEnd : this.onTimerEnd
		});

		this.canvasModel = CanvasModel.create({
			brushColor: 'Black',
			lineWidth: 3
		});
		this.timerModel.setOnTimerEnd(this.onTimerEnd);
	}

	render() {

		let classes = classNames({
			instructions : true,
			disabled : this.state.buttonDisabled
		});

		return (
			<div className='canvas-container'>
				<Canvas 
					model={this.canvasModel}
				/>
				<div className='canvas-overlay' onMouseDown={this.onMouseDown}>
					<Timer 
						model={this.timerModel}
					/>
					<div className={classes}>
						{'Here are some instructions'}
						{'Here are some instructions'}
						{'Here are some instructions'}
						{'Here are some instructions'}
						{'Here are some instructions'}
						{'Here are some instructions'}
						<ImperfectButton
							buttonText={'Start'}
							onClick={this.onClickHandler}
						/>
					</div>
				</div>
			</div>
		);
	}

	onClickHandler(event) {
		this.timerModel.startTimer();
		this.setState({ buttonDisabled : true});
		event.preventDefault();
	}

	onTimerEnd(){
		alert('Timer is done.');
	}

	
}

export default GameBoard;

GameBoard.propTypes = {
	buttonText : PropTypes.string,
	disabled: PropTypes.bool,
	onClick : PropTypes.func
}
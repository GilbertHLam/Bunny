import React, { Component } from 'react';
import './GameBoard.css';
import Timer from '../timer/Timer';
import { TimerModel } from '../timer/TimerModel';
import ImperfectButton from '../buttons/ImperfectButton';
import Canvas from './Canvas';
import classNames from 'classnames';
import {observer} from "mobx-react";
import PropTypes from 'prop-types';

const GameBoard = observer(class GameBoard extends Component {

	constructor(props) {
		super(props);
		this.state = { buttonDisabled: false }
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onTimerEnd = this.onTimerEnd.bind(this);
		this.timerModel = TimerModel.create({
			timeLimit: 10,
			timerOn: false,
			onTimerEnd : this.onTimerEnd
		});

		this.timerModel.setOnTimerEnd(this.onTimerEnd);
	}

	render() {

		let classes = classNames({
			instructions : true,
			disabled : this.state.buttonDisabled
		});

		let containerClasses = classNames({
			'drawing-disabled' : !this.props.canvasModel.isDrawingAllowed(),
			'canvas-container' : true
		});

		return (
			<div className={containerClasses}>
				<Canvas 
					model={this.props.canvasModel}
				/>
				<div className='canvas-overlay' onMouseDown={this.onMouseDown}>
					<Timer 
						model={this.timerModel}
					/>
					<div className={classes}>
						{`You have ${this.timerModel.getTimeLimit()} seconds to draw a bunny!`}
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
		this.props.canvasModel.setDrawingAllowed(true);
		event.preventDefault();
	}

	disableDrawing() {
		this.props.canvasModel.setDrawingAllowed(false);
	}

	onTimerEnd(){
		this.disableDrawing();
		const dataURL = this.props.canvasModel.canvas.toDataURL();
		console.log(dataURL);
	}

	
});

export default GameBoard;

GameBoard.propTypes = {
	canvasModel: PropTypes.any.isRequired
}
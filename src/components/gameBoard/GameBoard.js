import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './GameBoard.css';
import Timer from '../timer/Timer';
import { TimerModel } from '../timer/TimerModel';
import ImperfectButton from '../buttons/ImperfectButton';
import Canvas from './Canvas';
import classNames from 'classnames';
import {observer} from "mobx-react";
import PropTypes from 'prop-types';
const axios = require('axios');


const GameBoard = observer(class GameBoard extends Component {

	constructor(props) {
		super(props);
		this.state = { buttonDisabled: false, redirectToScorePage: false, userScore: 0, userImage: ''};
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onTimerEnd = this.onTimerEnd.bind(this);
		this.timerModel = TimerModel.create({
			timeLimit: 30,
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

		if (this.state.redirectToScorePage) {
			return <Redirect to={{
				pathname: '/score',
				state: { userScore: this.state.userScore, image: this.state.userImage }
			}}/>;
		}

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
						<p>
							{'You\'ll have 30 seconds to draw a bunny!'}
						</p>
						
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
		const dataURL = this.props.canvasModel.canvas.toDataURL().substring(22);
		this.setState({userImage : dataURL});
		axios.post('http://localhost:4000/analyzeImage', {
			image: dataURL
		  })
		  .then((response) => {
			this.setState({userScore : Math.round(Math.pow(response.data.score,6)*100*100)/100, redirectToScorePage: true});
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}

	
});

export default GameBoard;

GameBoard.propTypes = {
	canvasModel: PropTypes.any.isRequired
}
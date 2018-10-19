import React, { Component } from 'react';
import Timer from '../timer/Timer';
import { TimerModel } from '../timer/TimerModel';
import ImperfectButton from '../buttons/ImperfectButton';
import './Play.css';

class Play extends Component {

	constructor(props) {
		super(props);
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
		return (
			<div className='play'>
			<Timer 
				model={this.timerModel}
			/>
			<div className='canvas'>
					
			</div>
			<ImperfectButton
				buttonText={'Start'}
				onClick={this.onClickHandler}
			/>

			</div>
		);
	}

	onClickHandler(event) {
		this.timerModel.startTimer();
		event.preventDefault();
	}

	onTimerEnd(){
		alert('Timer is done.');
	}
}

export default Play;

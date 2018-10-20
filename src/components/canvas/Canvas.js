import React, { Component } from 'react';
import './Canvas.css';
import Timer from '../timer/Timer';
import { TimerModel } from '../timer/TimerModel';
import ImperfectButton from '../buttons/ImperfectButton';
import classNames from 'classnames';

import PropTypes from 'prop-types';

class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = { buttonDisabled: false }
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

		return (
			<div className='canvas notActive'>
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

export default Canvas;

Canvas.propTypes = {
	buttonText : PropTypes.string,
	disabled: PropTypes.bool,
	onClick : PropTypes.func
}
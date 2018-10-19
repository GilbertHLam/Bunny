import React, { Component } from 'react';
import * as mobx from 'mobx';
import './Timer.css';

import PropTypes from 'prop-types';
class Timer extends Component {

	constructor(props){
		super(props);
		this.state = {timeLimit : this.props.model.timeLimit};
		mobx.reaction(() => {
			return this.props.model.timeLimit;
		}, (timeLimit) => {
			this.setState({timeLimit : timeLimit});
		});
	}

	render() {
		return (
			<div className='timer'>
				{this.state.timeLimit}
			</div>
		);
	}
}

export default Timer;

Timer.propTypes = {
	model : PropTypes.any
};
import React, { Component } from 'react';
import './ImperfectButton.css';

import PropTypes from 'prop-types';

class ImperfectButton extends Component {
	constructor(props) {
		super(props);
		this.buttonText = this.props.buttonText;
	}

	render() {
		return (
			<div className='button' 
				onClick={this.props.onClick}
			>
				{this.buttonText}
			</div>
		);
	}
}

export default ImperfectButton;

ImperfectButton.propTypes = {
	buttonText : PropTypes.string,
	onClick : PropTypes.func
}
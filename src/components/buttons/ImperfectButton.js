import React, { Component } from 'react';
import './ImperfectButton.css';
import classNames from 'classnames';

import PropTypes from 'prop-types';

class ImperfectButton extends Component {

	render() {

		return (
			<div className='button'
				onClick={this.props.onClick}
			>
				{this.props.buttonText}
			</div>
		);
	}
}

export default ImperfectButton;

ImperfectButton.propTypes = {
	buttonText : PropTypes.string,
	disabled: PropTypes.bool,
	onClick : PropTypes.func
}
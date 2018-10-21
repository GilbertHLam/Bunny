import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Canvas.css';

import PropTypes from 'prop-types';

class Canvas extends Component {

	constructor(props) {
		super(props);
		this.model = this.props.model;
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
	}

	componentDidMount(){
		const canvas = ReactDOM.findDOMNode(this);
		const context = canvas.getContext('2d');
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		this.model.setCanvas(canvas);
		this.model.setContext(context);
	}

	render() {
		return (
			<canvas className='canvas'
				onMouseDown={this.onMouseDown}
				onTouchStart={this.onTouchStart}
				onMouseMove={this.onMouseMove}
				onTouchMove={this.onTouchMove}
				onMouseUp={this.onMouseUp}
				onTouchEnd={this.onMouseUp}
			>
			</canvas>
		);
	}

	onMouseDown(event) {
		const rect = this.model.canvas.getBoundingClientRect();
    	this.model.context.beginPath();
		this.model.setLastCoordinates(event.clientX - rect.left, event.clientY - rect.top);
		this.model.setDrawing(true);
	}

	onTouchStart(event) {
		const rect = this.model.canvas.getBoundingClientRect();
    	this.model.context.beginPath();
		this.model.setLastCoordinates(event.targetTouches[0].pageX - rect.left, event.targetTouches[0].pageY - rect.top);
		this.model.setDrawing(true);
	}

	onTouchMove(event) {
		if (this.model.isDrawing()) {
			const rect = this.model.canvas.getBoundingClientRect();
			const lastCoordinate = this.model.lastCoordinate;
			const currentCoordinate = [event.targetTouches[0].pageX - rect.left, event.targetTouches[0].pageY - rect.top];
			this.draw(lastCoordinate, currentCoordinate);
			this.model.setLastCoordinates(currentCoordinate);
		}
	}

	onMouseMove(event) {
		if (this.model.isDrawing()) {
			const rect = this.model.canvas.getBoundingClientRect();
			const lastCoordinate = this.model.lastCoordinate;
			const currentCoordinate = [event.clientX - rect.left, event.clientY - rect.top];
			this.draw(lastCoordinate, currentCoordinate);
			this.model.setLastCoordinates(currentCoordinate);
		}
	}

	onMouseUp(event) {
		this.model.setDrawing(false);
	}

	draw(lastCoordinate, currentCoordinate) {
		const newContext = this.model.context;
		newContext.strokeStyle = this.model.brushColor;
		newContext.lineWidth = this.model.lineWidth;
		this.model.setContext(newContext);
		this.model.context.moveTo(lastCoordinate[0], lastCoordinate[1]);
		this.model.context.lineTo(currentCoordinate[0], currentCoordinate[1]);
		this.model.context.stroke();
	}
	
}

export default Canvas;

Canvas.propTypes = {
	model : PropTypes.any.isRequired
}
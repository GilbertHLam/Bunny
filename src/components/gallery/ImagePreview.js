import React, { Component } from 'react';
import './ImagePreview.css';


class ImagePreview extends Component {

	render() {

		return (
			<div className={`drawing ${this.props.number}`}>
                <img className='image' src={this.props.image} alt='Nice bunny' />
                <div className='info'>
                    <div>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.score + '%'}
                    </div>
                </div>
			</div>
		);
	}
}

export default ImagePreview;
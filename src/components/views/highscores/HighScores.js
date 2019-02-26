import React, { Component } from 'react';
import ImagePreview from '../../gallery/ImagePreview';
import './HighScores.css';
import ImperfectButton from '../../buttons/ImperfectButton';
import {
	Link
} from 'react-router-dom'
const axios = require('axios');


class HighScores extends Component {

	constructor(props) {
		super(props);
		this.state = { drawings: {}, fetched: false }

	}

	componentDidMount() {
		axios.get('http://localhost:4000/topDrawings')
			.then((response) => {
				this.setState({ drawings: response.data, fetched: true });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		if (!this.state.fetched) {
			return null;
		}
		return (
			<div className='highscores'>
				<h1>
					High Scores
        </h1>
				
					<div className='drawingRow'>
						<ImagePreview number='one' image={`data:image/jpeg;base64,${this.state.drawings[0].image}`} name={this.state.drawings[0].name} score={this.state.drawings[0].score}/>
						<ImagePreview number='two' image={`data:image/jpeg;base64,${this.state.drawings[1].image}`} name={this.state.drawings[1].name} score={this.state.drawings[1].score}/>
						<ImagePreview number='three' image={`data:image/jpeg;base64,${this.state.drawings[2].image}`} name={this.state.drawings[2].name} score={this.state.drawings[2].score}/>

					</div>
					<div className='drawingRow'>
						<ImagePreview number='four' image={`data:image/jpeg;base64,${this.state.drawings[3].image}`} name={this.state.drawings[3].name} score={this.state.drawings[3].score}/>
						<ImagePreview number='five' image={`data:image/jpeg;base64,${this.state.drawings[4].image}`} name={this.state.drawings[4].name} score={this.state.drawings[4].score}/>
					</div>
				
					<div className='button-div'>
						<Link to={'/play'}>
							<ImperfectButton
								onClick={this._handlePlayClick}
								buttonText={'Try Again'}
							/>
						</Link>
						<Link to={'/home'}>
							<ImperfectButton
								buttonText={'Home'}
							/>
						</Link>
					</div>


			</div>
		);
	}
}

export default HighScores;

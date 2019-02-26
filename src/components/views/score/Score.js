import React, { Component } from 'react';
import ImperfectButton from '../../buttons/ImperfectButton';
import {
	Link
} from 'react-router-dom'
import './Score.css';

class Score extends Component {

	constructor(props){
        super(props);
	}
	
	render() {
		return (
			<div className='score'>
                <h1>
                    Score: 
                    {this.props.location.state.userScore + '%'}
                </h1>
                <img className='userImage' src={`data:image/jpeg;base64,${this.props.location.state.image}`} alt='Your drawn picture should be here' />
                <div className='button-div'>
					<Link to={'/play'}>
						<ImperfectButton
							onClick={this._handlePlayClick}
							buttonText={'Try Again'}
						/>
					</Link>
					<Link to={'/highscores'}>
						<ImperfectButton
							buttonText={'View High Scores'}
						/>
					</Link>
				</div>
			</div>
		);
	}
}

export default Score;

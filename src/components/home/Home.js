import React, { Component } from 'react';
import ImperfectButton from '../buttons/ImperfectButton';
import './Home.css';
import FrenchLop from '../../images/frenchlop.png';
import {
	Link
} from 'react-router-dom'

class Home extends Component {

	render() {
		return (
			<div className='home'>
				<h1>Draw-a-bunny</h1>
				<img className='mainBunny' alt={'French Lop'} src={FrenchLop} />
				<div className='button-div'>
					<Link to={'/play'}>
						<ImperfectButton
							onClick={this._handlePlayClick}
							buttonText={'Play'}
						/>
					</Link>
					<ImperfectButton
						buttonText={'About'}
					/>
				</div>
			</div>
		);
	}
}

export default Home;
import React, { Component } from 'react';
import ImperfectButton from '../buttons/ImperfectButton';

import './Home.css';
import FrenchLop from '../../images/frenchlop.png';

class Home extends Component {
	render() {
		return (
			<div className='home'>
				<h1>Draw-a-bunny</h1>
				<img className='mainBunny' src={FrenchLop} />
				<div className='button-div'>
					<ImperfectButton
						buttonText={'Play'}
					/>
					<ImperfectButton
						buttonText={'About'}
					/>
				</div>
			</div>
		);
	}
}

export default Home;
import React from 'react';
import Button from '../reuse/Button';

import main from '../../assets/main/main.png';
import play from '../../assets/main/play.svg';

const Main = () => {
	return (
		<section className='main'>
			<div className='main_info animate__animated animate__fadeInLeft'>
				<h1 className='main_info-title animate__animated animate__rollIn'>
					Virtual Reality Business Solutions
				</h1>
				<p className='main_info-text'>
					We have over 15 year exprience in business consultting arena. We have
					over 15 year exprience in business consultting arena and artficial
					intelligence.
				</p>
				<div className='main_info-tools'>
					<Button text='Join Us' styleName='main_info-tools--btn' />
					<div className='main_info-tools--watch'>
						<a href='/'>
							<img src={play} alt='play' />
						</a>
						<a href='/' className='main_info-tools--watch-text'>Watch video</a>
					</div>
				</div>
			</div>
			<img
				className='main-img animate__animated animate__fadeInRight'
				src={main}
				alt='main'
			/>
		</section>
	);
};

export default Main;

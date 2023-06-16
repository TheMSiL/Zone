import React from 'react';

import { useInView } from 'react-intersection-observer';

import subscribe from '../../assets/subscribe.svg';

const Subscribe = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<section className='subscribe animate__animated animate__fadeIn' ref={ref}>
			{inView && (
				<>
					<h2 className='subscribe_title animate__animated animate__flipInX'>
						Subscribe to get the Latest News
					</h2>
					<p className='subscribe_text'>
						We recommended you to subscribe to our newspaper, drop your email
						below to get daily update about us
					</p>
					<form className='subscribe_form'>
						<input
							className='subscribe_form-input'
							type='email'
							placeholder='Enter your email address'
						/>
						<button className='subscribe_form-btn'>
							<img src={subscribe} alt='subscribe' />
							Subscribe
						</button>
					</form>
				</>
			)}
		</section>
	);
};

export default Subscribe;

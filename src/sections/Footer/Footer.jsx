import React from 'react';

import { useInView } from 'react-intersection-observer';

import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

const Footer = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<footer className='footer' ref={ref}>
			{inView && (
				<div className='animate__animated animate__backInUp footer-animate'>
					<FooterTop />
					<div className='footer_separator' />
					<FooterBottom />
				</div>
			)}
		</footer>
	);
};

export default Footer;

import React from 'react';

const FooterBottom = () => {
	return (
		<div className='footer_bottom'>
			<p className='footer_bottom-copy'>© 2021 Zone. - All rights reserved.</p>
			<ul className='footer_bottom-list'>
				<li className='footer_bottom-list--item'>
					<a href='/'>Privacy</a>
				</li>
				<li className='footer_bottom-list--item'>
					<a href='/'>Security</a>
				</li>
				<li className='footer_bottom-list--item'>
					<a href='/'>Terms</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterBottom;

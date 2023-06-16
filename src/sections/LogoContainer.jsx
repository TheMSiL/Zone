import React from 'react'

import logo from '../assets/logo.svg';

const LogoContainer = () => {
	return (
		<div className='logo_container'>
			<a href='/'>
				<img className='logo_container-img' src={logo} alt='Zone' />
			</a>
			<p className='logo_container-text'>Zone.</p>
		</div>
	);
}

export default LogoContainer
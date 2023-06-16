import React from 'react';

import afroza from '../../assets/about/afroza.svg';
import alex from '../../assets/about/alex.svg';
import alina from '../../assets/about/alina.svg';
import facebook from '../../assets/about/facebook.svg';
import linkedin from '../../assets/about/linkedin.svg';
import skype from '../../assets/about/skype.svg';
import sunny from '../../assets/about/sunny.svg';
import twitter from '../../assets/about/twitter.svg';

export const personInfo = [
	{
		img: sunny,
		name: 'Sunny Khan',
		position: 'EXECUTIVE OFFICER',
	},
	{
		img: alina,
		name: 'Alina Jesia',
		position: 'UX/UI DESIGNER',
	},
	{
		img: alex,
		name: 'Alex Sohag',
		position: 'BUSINESS DEVELOPMENT',
	},
	{
		img: afroza,
		name: 'Afroza Mou',
		position: 'Head of marketing',
	},
];

const PersonItem = ({ img, name, position }) => {
	return (
		<div className='about_persons-item animate__animated animate__jackInTheBox'>
			<div className='about_persons-item--imgBox'>
				<img src={img} alt='ava' />
			</div>
			<h4 className='about_persons-item--name'>{name}</h4>
			<p className='about_persons-item--pos'>{position}</p>
			<div className='about_persons-item--socials'>
				<a href='https://www.skype.com/'>
					<img src={skype} alt='skype' />
				</a>
				<a href='https://www.linkedin.com/'>
					<img src={linkedin} alt='linkedin' />
				</a>
				<a href='https://twitter.com/'>
					<img src={twitter} alt='twitter' />
				</a>
				<a href='https://www.facebook.com/'>
					<img src={facebook} alt='facebook' />
				</a>
			</div>
		</div>
	);
};

export default PersonItem;

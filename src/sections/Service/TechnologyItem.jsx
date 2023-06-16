import React from 'react';

import arrow from '../../assets/service/arrow.svg';

import analyze from '../../assets/service/analyze.svg';
import crypto from '../../assets/service/crypto.svg';
import module from '../../assets/service/module.svg';
import order from '../../assets/service/order.svg';
import smart from '../../assets/service/smart.svg';
import social from '../../assets/service/social.svg';

export const techItems = [
	{
		img: order,
		title: 'Order Management',
	},
	{
		img: social,
		title: 'Social Assistant',
	},
	{
		img: crypto,
		title: 'Crypto Platform',
	},
	{
		img: smart,
		title: 'Smart Trading Modules',
	},
	{
		img: analyze,
		title: 'Analyzer of the News',
	},
	{
		img: module,
		title: 'Module of Price Notification',
	},
];

const TechnologyItem = ({ title, img }) => {
	return (
		<div className='service_technology-item animate__animated animate__zoomIn'>
			<div className='service_technology-item--imgBox'>
				<img src={img} alt='service-logo' />
			</div>
			<h3 className='service_technology-item--title'>{title}</h3>
			<p className='service_technology-item--text'>
				Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
				accumsan nisi Ut ut felis congue nisl hendrerit commodo.
			</p>
			<div className='service_technology-item--linkBox'>
				<p className='service_technology-item--linkBox-text'>
					Learn more
				</p>
				<a href='/' className='service_technology-item--linkBox-arrow'>
					<img src={arrow} alt='arrow' />
				</a>
			</div>
		</div>
	);
};

export default TechnologyItem;

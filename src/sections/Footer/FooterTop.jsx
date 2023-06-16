import React from 'react';

import LogoContainer from '../LogoContainer';

import calling from '../../assets/footer/Calling.svg';
import location from '../../assets/footer/Location.svg';
import message from '../../assets/footer/Message.svg';

import facebook from '../../assets/footer/facebook.svg';
import instagram from '../../assets/footer/instagram.svg';
import pinterest from '../../assets/footer/pinterest.svg';
import twitter from '../../assets/footer/twitter.svg';

const contactsList = [
	{
		img: location,
		text: 'Dhaka, Bangladesh',
		href: 'https://www.google.com/maps?q=Dhaka%2C+Bangladesh',
	},
	{
		img: calling,
		text: '0943833399',
		href: 'tel:0943833399',
	},
	{
		img: message,
		text: 'support@zone.com',
		href: 'mailto:support@zone.com',
	},
];

const socials = [
	{ img: facebook, href: 'https://www.facebook.com/' },
	{ img: twitter, href: 'https://www.twitter.com/' },
	{ img: instagram, href: 'https://www.instagram.com/' },
	{ img: pinterest, href: 'https://www.pinterest.com/' },
];

const listItems = [
	{
		title: 'Service',
		items: [
			'Order Management',
			'Social Assistant',
			'Crypto Platform',
			'Analyzer of the News',
		],
	},
	{
		title: 'Company',
		items: ['About Us', 'News', 'Our trusted partner', 'New users FAQ'],
	},
	{
		title: 'Supports',
		items: ['Help center', 'Feedback', 'Contact us', 'Terms conditions'],
	},
	{
		title: 'Resources',
		items: ['Download app', 'Blog', 'What’s new', 'Sitemap'],
	},
];

const FooterTop = () => {
	return (
		<div className='footer_top'>
			<div className='footer_top-info'>
				<LogoContainer />
				<ul className='footer_top-info--contacts'>
					{contactsList.map(({ img, text, href }, index) => {
						return (
							<li key={index}>
								<a href={href} className='footer_top-info--contacts--item'>
									<img src={img} alt='' />
									{text}
								</a>
							</li>
						);
					})}
				</ul>
				<div className='footer_top-info--contacts--socials'>
					{socials.map(({ img, href }, index) => {
						return (
							<a href={href} key={index}>
								<img key={index} src={img} alt='' />
							</a>
						);
					})}
				</div>
			</div>

			<div className='footer_top-list'>
				{listItems.map(({ title, items }, index) => {
					return (
						<div key={index} className='footer_top-list--item'>
							<h4 className='footer_top-list--item--title'>{title}</h4>
							<ul className='footer_top-list--item--ul'>
								{items.map((item, index) => {
									return (
										<li className='footer_top-list--item--ul--li' key={index}>
											<a href='/'>{item}</a>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FooterTop;

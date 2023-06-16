import React from 'react';

export const navItems = [
	{
		id: '1',
		title: 'Home',
	},
	{
		id: '2',
		title: 'About Us',
	},
	{
		id: '3',
		title: 'Service',
	},
	{
		id: '4',
		title: 'Pricing',
	},
	{
		id: '5',
		title: 'Blog',
	},
];

const HeaderNavItem = ({ title }) => {
	return (
		<li className='header-ul--li'>
			<a href='/'>{title}</a>
		</li>
	);
};

export default HeaderNavItem;

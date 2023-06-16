import { useState } from 'react';
import LogoContainer from './LogoContainer';
import HeaderNavItem, { navItems } from './Main/components/HeaderNavItem';
import Button from './reuse/Button';

const Header = () => {
	const [showBurger, setShowBurger] = useState(false);

	const handleBurger = () => {
		setShowBurger(prev => !prev);
	};
	return (
		<header className='header animate__animated animate__fadeInDown'>
			<LogoContainer />
			<div onClick={handleBurger} className='burger-menu'>
				<span
					className={
						!showBurger
							? 'burger-menu-item'
							: 'burger-menu-item burger-menu--1'
					}
				/>
				<span
					className={
						!showBurger
							? 'burger-menu-item'
							: 'burger-menu-item burger-menu--2'
					}
				/>
				<span
					className={
						!showBurger ? 'burger-menu-item' : 'burger-menu-item burger-menu--3'
					}
				/>
			</div>
			{!showBurger ? (
				<ul className='header-ul'>
					{navItems.map(({ id, title }) => {
						return <HeaderNavItem key={id} title={title} />;
					})}
					<Button text='Contact Us' styleName='header-btn' />
				</ul>
			) : (
				<div className='mobile_ul'>
					<ul className='burger-ul'>
						{navItems.map(({ id, title }) => {
							return <HeaderNavItem key={id} title={title} />;
						})}
						<Button text='Contact Us' styleName='header-btn' />
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;

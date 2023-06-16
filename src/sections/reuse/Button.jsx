import React from 'react';

const Button = ({ text, styleName }) => {
	return (
		<button className={styleName}>
			<a href='/'>{text}</a>
		</button>
	);
};

export default Button;

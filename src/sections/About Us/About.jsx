import React from 'react';

import { useInView } from 'react-intersection-observer';

import SectionTitle from '../reuse/SectionTitle';
import PersonItem, { personInfo } from './PersonItem';

const About = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<section className='about' ref={ref}>
			{inView && (
				<>
					<SectionTitle
						styleName='about_title animate__animated animate__flipInX'
						text='Met Our Team'
					/>
					<p className='about_text animate__animated animate__fadeIn'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
						accumsan nisi Ut ut felis congue nisl hendrerit commodo.
					</p>
					<div className='about_persons'>
						{personInfo.map(({ img, name, position }, index) => {
							return (
								<PersonItem
									key={index}
									img={img}
									name={name}
									position={position}
								/>
							);
						})}
					</div>
				</>
			)}
		</section>
	);
};

export default About;

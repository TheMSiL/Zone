import React from 'react';

import { useInView } from 'react-intersection-observer';

import SectionTitle from '../reuse/SectionTitle';
import TechnologyItem, { techItems } from './TechnologyItem';

const Service = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<section className='service' ref={ref}>
			{inView && (
				<>
					<SectionTitle
						styleName='service_title animate__animated animate__flipInX'
						text='Our Service'
					/>
					<p className='service_text animate__animated animate__fadeIn'>
						We turn information into actionable insights We work to understand
						your issues and are driven to ask better questions in the pursuit of
						making work.
					</p>
					<div className='service_technology'>
						{techItems.map(({ img, title }, index) => {
							return <TechnologyItem key={index} img={img} title={title} />;
						})}
					</div>
				</>
			)}
		</section>
	);
};

export default Service;

import React from 'react';

import { useInView } from 'react-intersection-observer';

import Button from '../reuse/Button';
import SectionTitle from '../reuse/SectionTitle';

const BlogInfo = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<div className='blog_info-item' ref={ref}>
			{inView && (
				<SectionTitle
					styleName='blog_info-item--title animate__animated animate__flipInX'
					text='We complete every projects extra care as customer need'
				/>
			)}
			<p className='blog_info-item--text '>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum
				risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet
				convallis nuncoe scelerisque in. orem ipsum dolor sit amet, consectetur
				adipisicing elit. Labore eius molestiae facere, natus reprehenderit
				eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure
				inventore possimus laboriosam qui nam.
			</p>
			<Button text='Read more' styleName='blog_info-item--btn' />
		</div>
	);
};

export default BlogInfo;

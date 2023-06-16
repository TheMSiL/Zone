import React from 'react';

import blog1 from '../../assets/blog/blog-1.png';
import blog2 from '../../assets/blog/blog-2.png';
import BlogInfo from './BlogInfo';

const Blog = () => {
	return (
		<section className='blog'>
			<div className='blog_info'>
				<img src={blog1} alt='blog1' />
				<BlogInfo />
			</div>

			<div className='blog_info'>
				<BlogInfo />
				<img src={blog2} alt='blog2' />
			</div>
		</section>
	);
};

export default Blog;

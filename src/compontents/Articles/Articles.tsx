import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import articleData from './../../articles.json';

const Articles: React.FC = () => {
	const posts = articleData.map((post) => {
		return (
			<Link to={'/post/' + post.slug} key={post.slug}>
				<div className='post-listing'>
					<h1>{post.title}</h1>
				</div>
			</Link>
		);
	});
	return <div className='blog'>{posts}</div>;
};

export default Articles;

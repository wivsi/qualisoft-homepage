import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import articleData from './../../articles.json';

import styles from './Articles.module.scss';

const Articles: React.FC = () => {
	const posts = articleData.map((post) => {
		const date = new Date(post.date);
		return (
			<Link to={'/post/' + post.slug} key={post.slug}>
				<div className={styles.post_listing}>
					<h1>{post.title}</h1>
					<p>{post.author}</p>
					<p>{date.toLocaleDateString()}</p>
				</div>
			</Link>
		);
	});
	return <div className={styles.blog}>{posts}</div>;
};

export default Articles;

import React from 'react';
import { useParams } from 'react-router-dom';
import articleData from './../../articles.json';
import styles from './Post.module.scss';

interface ParamTypes {
	slug: string;
}

const Post: React.FC = () => {
	let { slug } = useParams<ParamTypes>();
	let post = findPost(slug);

	return (
		<div className={styles.post_container}>
			<h1 className={styles.post_title}>{post?.title}</h1>
			<p>{post?.author}</p>
			<p>{post?.date}</p>
			<p className={styles.post_content}>{post?.content}</p>
		</div>
	);
};

const findPost = (slug: string) => {
	return articleData.find((a) => a.slug === slug);
};

export default Post;

import React from 'react';
import { useParams } from 'react-router-dom';
import articleData from './../../articles.json';

interface ParamTypes {
	slug: string;
}

const Post: React.FC = () => {
	let { slug } = useParams<ParamTypes>();
	console.log(slug);
	let post = findPost(slug);

	return (
		<div className='post-content-view'>
			<h1 className='title'>{post?.title}</h1>
			<p>{post?.content}</p>
		</div>
	);
};

const findPost = (slug: any) => {
	return articleData.find((a) => a.slug === slug);
};

export default Post;

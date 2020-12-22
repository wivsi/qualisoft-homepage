import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from '../Articles/Articles';
import Post from '../Post/Post';

const Body: React.FC = () => {
	return (
		<Switch>
			<Route path='/' exact component={Articles} />
			<Route path='/post/:slug' component={Post} />{' '}
		</Switch>
	);
};

export default Body;

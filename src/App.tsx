import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Body from './compontents/Body/Body';
import Header from './compontents/Header/Header';
import './App.scss';
import optionsData from './headers.json';
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Link to='/' className='logo'>
					{' '}
					Qualisoft
				</Link>
				<Header options={optionsData} />
				<Body />
			</div>
		</BrowserRouter>
	);
}

export default App;

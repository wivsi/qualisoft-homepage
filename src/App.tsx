import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Body from './compontents/Body/Body';
import Header from './compontents/Header/Header';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header>
					<ul>
						<li>Header</li>
					</ul>
				</Header>
				<Body />
			</div>
		</BrowserRouter>
	);
}

export default App;

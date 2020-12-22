import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Body from './compontents/Body/Body';
import Header from './compontents/Header/Header';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header>
					<ul>
						<li>tester</li>
					</ul>
				</Header>
				<Body />
			</div>
		</BrowserRouter>
	);
}

export default App;

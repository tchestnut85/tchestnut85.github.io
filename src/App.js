import './index.css';

import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
	const [sections] = useState([
		{
			id: '1',
			name: 'About',
		},
		{
			id: '2',
			name: 'Portfolio',
		},
		{
			id: '3',
			name: 'Contact',
		},
		{
			id: '4',
			name: 'Resume',
		},
	]);

	const [currentSection, setCurrentSection] = useState('About');

	return (
		<Router>
			<div className='app-container'>
				<div className='content-wrap'>
					<Header
						sections={sections}
						currentSection={currentSection}
						setCurrentSection={setCurrentSection}
					></Header>
					<Switch>
						<Route exact path='/' component={About} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/resume' component={Resume} />
						<Route exact path='/portfolio' component={Portfolio} />
					</Switch>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
}

export default App;

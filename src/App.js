import './index.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import React from 'react';
import Resume from './components/Resume';

function App() {
	return (
		<Router>
			<div className='app-container'>
				<div className='content-wrap'>
					<Header />
					<Switch>
						<Route exact path='/' component={About} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/resume' component={Resume} />
						<Route exact path='/portfolio' component={Portfolio} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

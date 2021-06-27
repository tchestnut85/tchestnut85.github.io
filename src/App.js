import './index.css';

import React, { useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { sections } from './utils/navItems';

function App() {
	const [currentSection, setCurrentSection] = useState('About');

	const renderPage = () => {
		switch (currentSection) {
			case 'Projects':
				return <Projects />;
			case 'Contact':
				return <Contact />;
			case 'Resume':
				return <Resume />;
			default:
				return <About />;
		}
	};

	return (
		<div className='app-container'>
			<div className='content-wrap'>
				<Header
					sections={sections}
					currentSection={currentSection}
					setCurrentSection={setCurrentSection}
				/>
				{renderPage(currentSection)}
			</div>
			<Footer />
		</div>
	);
}

export default App;

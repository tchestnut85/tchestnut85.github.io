import React from 'react';

import NavItem from '../NavItem';

import { NAME } from '../../constants/navItems';

function Nav({ sections, currentSection, setCurrentSection }) {
	return (
		<nav className="navbar">
			<h1 className="my-name">{NAME}</h1>
			<ul className="flex space-a nav-items">
				{sections.map(section => (
					<NavItem
						key={section.name}
						section={section.name}
						currentSection={currentSection}
						setCurrentSection={setCurrentSection}
					/>
				))}
			</ul>
		</nav>
	);
}

export default Nav;

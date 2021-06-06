import Nav from '../Nav';
import React from 'react';

function Header(props) {
	const { sections, currentSection, setCurrentSection } = props;

	return (
		<header>
			<Nav
				sections={sections}
				currentSection={currentSection}
				setCurrentSection={setCurrentSection}
			/>
		</header>
	);
}

export default Header;

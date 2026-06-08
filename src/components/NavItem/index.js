import React from 'react';
import { usePostHog } from '@posthog/react';

const NavItem = ({ section, currentSection, setCurrentSection }) => {
	const posthog = usePostHog();

	const handleClick = () => {
		setCurrentSection(section);
		posthog.capture('section_viewed', { section });
	};

	return (
		<li
			key={section}
			className={currentSection === section ? 'active list' : 'list'}
			onClick={handleClick}
		>
			<span className={currentSection === section ? '' : 'list-hover'}>
				{section}
			</span>
		</li>
	);
};

export default NavItem;

import { Link } from 'react-router-dom';
import React from 'react';

const NavItem = ({ section, currentSection, setCurrentSection }) => {
	return (
		<>
			<Link
				to={section === 'About' ? '/' : `/${section.toLowerCase()}`}
				key={section}
			>
				<li
					key={section}
					className={
						currentSection === section ? 'active list' : 'list'
					}
				>
					<span
						className={
							currentSection === section ? '' : 'list-hover'
						}
						onClick={() => setCurrentSection(section)}
					>
						{section}
					</span>
				</li>
			</Link>
		</>
	);
};

export default NavItem;

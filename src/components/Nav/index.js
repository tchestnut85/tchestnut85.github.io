import { Link } from 'react-router-dom';
import NavItem from '../NavItem';
import React from 'react';

function Nav(props) {
	const { sections, currentSection, setCurrentSection } = props;

	return (
		<nav className='navbar'>
			<h1 className='my-name'>Tom Chestnut</h1>
			<ul className='flex space-a'>
				<NavItem
					section={'About'}
					currentSection={currentSection}
					setCurrentSection={setCurrentSection}
				/>
				<NavItem
					section={'Portfolio'}
					currentSection={currentSection}
					setCurrentSection={setCurrentSection}
				/>
				<NavItem
					section={'Contact'}
					currentSection={currentSection}
					setCurrentSection={setCurrentSection}
				/>
				<NavItem
					section={'Resume'}
					currentSection={currentSection}
					setCurrentSection={setCurrentSection}
				/>
			</ul>
		</nav>
	);
}

export default Nav;

// {
// 	sections.map(section => (
// 		<Link
// 			to={
// 				section.name === 'About'
// 					? '/'
// 					: `/${section.name.toLowerCase()}`
// 			}
// 			key={section.name}
// 		>
// 			<li
// 				key={section.name}
// 				className={
// 					currentSection === section.name
// 						? 'active list'
// 						: 'list'
// 				}
// 			>
// 				<span
// 					className={
// 						currentSection === section.name
// 							? ''
// 							: 'list-hover'
// 					}
// 					onClick={() => setCurrentSection(section.name)}
// 				>
// 					{section.name}
// 				</span>
// 			</li>
// 		</Link>
// 	));
// }

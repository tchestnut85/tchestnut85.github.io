import { Link, useLocation } from 'react-router-dom';

import React from 'react';

const NavItem = ({ section }) => {
	const { pathname } = useLocation();
	const currentPage = pathname === '/' ? 'about' : pathname.slice(1);

	return (
		<>
			<Link
				to={section === 'About' ? '/' : `/${section.toLowerCase()}`}
				key={section}
			>
				<li
					className={
						currentPage === section.toLowerCase()
							? 'active list'
							: 'list'
					}
				>
					<span
						className={
							currentPage === section.toLowerCase()
								? ''
								: 'list-hover'
						}
					>
						{section}
					</span>
				</li>
			</Link>
		</>
	);
};

export default NavItem;

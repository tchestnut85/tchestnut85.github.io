import NavItem from '../NavItem';
import React from 'react';

function Nav() {
	return (
		<nav className='navbar'>
			<h1 className='my-name'>Tom Chestnut</h1>
			<ul className='flex space-a'>
				<NavItem section={'About'} />
				<NavItem section={'Portfolio'} />
				<NavItem section={'Contact'} />
				<NavItem section={'Resume'} />
			</ul>
		</nav>
	);
}

export default Nav;

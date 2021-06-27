import Icon from '../Icon';
import React from 'react';
import { links } from '../../utils/footerLinks';

function Footer() {
	return (
		<footer className='footer'>
			<Icon links={links}></Icon>
		</footer>
	);
}

export default Footer;

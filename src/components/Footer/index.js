import Icon from '../Icon';
import React from 'react';
import { LINKS } from '../../constants/footerLinks';

function Footer() {
	return (
		<footer className="footer">
			<Icon links={LINKS} />
		</footer>
	);
}

export default Footer;

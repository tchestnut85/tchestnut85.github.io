import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Link from '../Link';

function Icon({ links }) {
	return (
		<div className="flex centered wrap">
			{links.map(link => (
				<span key={`${link.icon}-span`}>
					<Link url={link.url} className="icon-link link">
						<FontAwesomeIcon
							className="icons"
							key={`${link.icon}-icon`}
							icon={link.iconName}
						/>
					</Link>
				</span>
			))}
		</div>
	);
}

export default Icon;

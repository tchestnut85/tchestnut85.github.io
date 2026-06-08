import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { usePostHog } from '@posthog/react';

import Link from '../Link';

function Icon({ links }) {
	const posthog = usePostHog();

	return (
		<div className="flex centered wrap">
			{links.map(link => (
				<span key={`${link.icon}-span`}>
					<Link
						url={link.url}
						className="icon-link link"
						onClick={() => posthog.capture('footer_link_clicked', { platform: link.name, url: link.url })}
					>
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

import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

import Link from '../Link';

import { EMAIL, CONTACT_TEXT } from '../../constants/contact';
import { SOCIAL_URLS } from '../../constants/socialUrls';

function Contact() {
	const [emailCopied, setEmailCopied] = useState(false);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(EMAIL);
			setEmailCopied(true);

			setTimeout(() => {
				setEmailCopied(false);
			}, 3000);
		} catch (err) {
			console.error(err);
			setEmailCopied(false);
		}
	};

	const renderSocialLinks = () => {
		return (
			<div className="social-links">
				{Object.keys(SOCIAL_URLS).map(key => {
					const { name, url } = SOCIAL_URLS[key];
					return (
						<Link key={name} label={name} url={url} className="social-link" />
					);
				})}
			</div>
		);
	};

	return (
		<section className="contact-me-section">
			<h2 className="heading">Contact Me</h2>
			<div>
				<div>
					<div className="content email-section">
						<h3 className="sub-heading">{CONTACT_TEXT.email.heading}</h3>
						<div className="email">
							<a id="email" href={`mailto:${EMAIL}`}>
								{EMAIL}
							</a>
							<button className="email-btn">
								<FontAwesomeIcon onClick={copyEmail} icon={faCopy} />
							</button>
						</div>
						{emailCopied && (
							<span style={{ marginTop: '10px' }} className="email-message">
								{CONTACT_TEXT.email.success}
							</span>
						)}
					</div>
				</div>
				<div>
					<div className="content social-section">
						<h3 className="sub-heading">{CONTACT_TEXT.social.heading}</h3>
						{renderSocialLinks()}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;

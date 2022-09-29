import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

import { ABOUT_TEXT, GITHUB_ENDPOINT } from '../../constants/about';

const { BIO, HEADING, IMAGE } = ABOUT_TEXT;

function About() {
	const [githubData, setGithubData] = useState('');

	useEffect(() => {
		getGithubData();
	}, []);

	const getGithubData = async () => {
		try {
			const res = await fetch(GITHUB_ENDPOINT);
			const data = await res.json();
			setGithubData(data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section>
			<h2 className="heading">{HEADING.h2}</h2>
			<h3 className="sub-heading">{HEADING.h3}</h3>
			<div className="bio-container">
				{!githubData?.avatar_url ? (
					<FontAwesomeIcon className="pic-placeholder" icon={faUserCircle} />
				) : (
					<img className="my-pic" src={githubData.avatar_url} alt={IMAGE.alt} />
				)}

				<article className="bio">
					{Object.keys(BIO).map(key => (
						<p key={key}>{BIO[key]}</p>
					))}
				</article>
			</div>
		</section>
	);
}

export default About;

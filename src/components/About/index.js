import React, { useEffect, useState } from 'react';

function About() {
	const githubEndpoint = 'https://api.github.com/users/tchestnut85';
	const [githubData, setGithubData] = useState('');

	useEffect(() => {
		getGithubData();
	}, []);

	const getGithubData = async () => {
		try {
			const res = await fetch(githubEndpoint);
			const data = await res.json();
			setGithubData(data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section>
			<h2 className='heading'>Hello! I'm Tom.</h2>
			<h3 className='sub-heading'>Full Stack JavaScript Developer</h3>
			<div className='bio-container'>
				<img
					className='my-pic'
					src={githubData.avatar_url}
					alt='Tom Chestnut holding his pug Frodo in front of a stream.'
				/>

				<article className='bio'>
					I'm a Full Stack JavaScript Developer specializing in the
					MERN stack and skilled in creating responsive web
					applications. I've earned a Full Stack Development
					Certificate from University of Pennsylvania LPS Coding
					Bootcamp.
					<br />
					I have created multiple projects using front-end technology
					such as JavaScript, React, HTML, and CSS as well as back-end
					tools like Node.js, Express.js, MongoDB, GraphQL and MySQL
					while following to development methods such as Agile
					development, RESTful APIs, MVC structure and Single Page
					Applications (SPAs).
					<br />
					When I'm not coding, I spend time going for hikes with my
					wife and our pug, or I may be playing video games like
					Skyrim, Legend of Zelda, or Assasin's Creed. I also enjoy
					traveling when able to, having visited Japan and Italy in
					the past and hope to see more countries in the future.
				</article>
			</div>
		</section>
	);
}

export default About;

import React from 'react';
import { SKILLS } from '../../constants/skills';

function Resume() {
	const frontendSkills = SKILLS.filter(skill => skill.type === 'front-end');
	const backendSkills = SKILLS.filter(skill => skill.type === 'back-end');

	return (
		<section className="resume-section">
			<div>
				<h2 className="heading">Resume</h2>
			</div>
			<p className="content resume-text">
				View or download my full resume
				<a
					className="resume-link"
					href="https://drive.google.com/file/d/1M4PNYrAi1U5XrBmbfFSP-DXe4pLXNSMs/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					here.
				</a>
			</p>
			<h3 className="heading">Front-End Skills</h3>
			<div className="icon-list">
				{frontendSkills.map(skill => (
					<div key={skill.name} className="skill-div flex space-b">
						<img
							src={require(`../../assets/skill-icons/${skill.file}`).default}
							className="skill-icon"
							alt={`Icon for ${skill.name}`}
						/>
						<span className="skill-text">{skill.name}</span>
					</div>
				))}
			</div>
			<h3 className="heading">Back-End Skills</h3>
			<div className="icon-list">
				{backendSkills.map(skill => (
					<div key={skill.name} className="skill-div flex space-b">
						<img
							src={require(`../../assets/skill-icons/${skill.file}`).default}
							className="skill-icon"
							alt={`Icon for ${skill.name}`}
						/>
						<span className="skill-text">{skill.name}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default Resume;

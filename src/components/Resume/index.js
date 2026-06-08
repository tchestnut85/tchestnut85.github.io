import React from 'react';

import { SKILLS, SKILL_TYPES, RESUME_TEXT, RESUME_URL } from '../../constants/skills';

const SKILL_TYPE_KEYS = Object.keys(SKILL_TYPES);

// eslint-disable-next-line no-unused-vars
const skills = SKILL_TYPE_KEYS.reduce((acc, key) => {
	const skillId = SKILL_TYPES[key].id;
	const newSkillObj = {
		heading: SKILL_TYPES[key].label,
		list: SKILLS.filter(skill => skill.type === skillId),
	};
	return [...acc, newSkillObj];
}, []);

// eslint-disable-next-line no-unused-vars
const ResumeSection = ({ skills }) => {
	return (
		<>
			{skills.map(skills => (
				<div key={skills.name} className="skill-div flex space-b">
					<img
						src={require(`../../assets/skill-icons/${skills.file}`).default}
						alt={`Icon for ${skills.name}`}
						className="skill-icon"
					/>
					<span className="skill-text">{skills.name}</span>
				</div>
			))}
		</>
	);
};

function Resume() {
	return (
		<section className="resume-section">
			<div>
				<h2 className="heading">Resume</h2>
			</div>
			<p className="content resume-content">
				{RESUME_TEXT.text}
				<a className="resume-link" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
					{RESUME_TEXT.here}
				</a>
			</p>
			{/* {skills.map(({ heading, list }) => (
				<div key={heading}>
					<h3 className="heading">{heading}</h3>
					<div className="icon-list">
						<ResumeSection skills={list} />
					</div>
				</div>
			))} */}
		</section>
	);
}

export default Resume;

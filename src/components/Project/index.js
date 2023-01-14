import React from 'react';

import Link from '../Link';

import { GITHUB_BASE_URL, PROJECT_TEXT } from '../../constants/projects';

function Project({ project }) {
	return (
		<div className="grid-item">
			<h2 className="project-title">{project.title}</h2>
			<div className="card-body">
				<div>
					<img
						src={project.image}
						alt={`Screenshot of ${project.title} App`}
						className="project-img"
					/>
				</div>
				<div>
					<p className="project-feature">{project.features}</p>
				</div>
			</div>
			<div className="repo-link-wrap">
				<Link
					label={
						project.type === 'back-end'
							? PROJECT_TEXT.visitLabel.backEnd
							: PROJECT_TEXT.visitLabel.frontEnd
					}
					url={project.url}
				/>
				<Link
					label={PROJECT_TEXT.githubLabel}
					url={`${GITHUB_BASE_URL}${project.repo}`}
					className="project-repo"
				/>
			</div>
		</div>
	);
}

export default Project;

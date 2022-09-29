import React from 'react';

import Link from '../Link';

import { PROJECTS } from '../../constants/projects';

function Project() {
	return (
		<div className="project-grid">
			{PROJECTS.map((project, i) => (
				<div key={i} className={`grid-item project-${i}`}>
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
							label={project.type === 'back-end' ? 'View Demo' : 'Visit App'}
							url={project.url}
						/>
						<Link
							label="GitHub Repo"
							url={`https://github.com/tchestnut85/${project.repo}`}
							className="project-repo"
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default Project;

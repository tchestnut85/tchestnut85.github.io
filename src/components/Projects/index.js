import React from 'react';

import { PROJECTS } from '../../constants/projects';

import Project from '../Project';

function Projects() {
	return (
		<section className="project-wrap">
			<h2 className="heading">My Projects</h2>
			<div className="project-grid">
				{PROJECTS.map(project => (
					<Project key={project.repo} project={project} />
				))}
			</div>
		</section>
	);
}

export default Projects;

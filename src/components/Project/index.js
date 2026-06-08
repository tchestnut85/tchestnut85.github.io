import React from 'react';
import { usePostHog } from '@posthog/react';

import Link from '../Link';

import { GITHUB_BASE_URL, PROJECT_TEXT } from '../../constants/projects';

function Project({ project }) {
	const posthog = usePostHog();

	const handleProjectLinkClick = () => {
		posthog.capture('project_link_clicked', {
			project_title: project.title,
			project_type: project.type,
			url: project.url,
		});
	};

	const handleGithubClick = () => {
		posthog.capture('project_github_clicked', {
			project_title: project.title,
			repo: project.repo,
			url: `${GITHUB_BASE_URL}${project.repo}`,
		});
	};

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
					onClick={handleProjectLinkClick}
				/>
				<Link
					label={PROJECT_TEXT.githubLabel}
					url={`${GITHUB_BASE_URL}${project.repo}`}
					className="project-repo"
					onClick={handleGithubClick}
				/>
			</div>
		</div>
	);
}

export default Project;

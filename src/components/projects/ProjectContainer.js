import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineLaunch } from 'react-icons/md';
import { v4 as uuid } from 'uuid';

import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
	return (
		<div className="project">
			<h3>{project.name}</h3>

			<p className="project__description">{project.description}</p>
			{project.stack && (
				<ul className="project__stack">
					{project.stack.map((item) => (
						<li key={uuid()} className="project__stack-item">
							{item}
						</li>
					))}
				</ul>
			)}

			{project.sourceCode && (
				<a
					href={project.sourceCode}
					aria-label="source code"
					className="link link--icon"
				>
					<BsGithub />
				</a>
			)}

			{project.livePreview && (
				<a
					href={project.livePreview}
					aria-label="live preview"
					className="link link--icon"
				>
					<MdOutlineLaunch />
				</a>
			)}
		</div>
	);
};

export default ProjectContainer;

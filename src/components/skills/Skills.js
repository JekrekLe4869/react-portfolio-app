import React from 'react';
import { v4 as uuid } from 'uuid';
import { skills } from '../../data';

import './Skills.css';

const Skills = () => {
	if (!skills.length) return null;

	return (
		<section id="skills" className="section skills">
			<h2 className="section__title">Skills</h2>
			<ul className="skills__list">
				{skills.map((skill) => (
					<li key={uuid()} className="skills__list-item btn btn--plain">
						{skill}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Skills;

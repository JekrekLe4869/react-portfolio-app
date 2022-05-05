import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { contact, projects, skills } from '../../data';

import './Navbar.css';

const Navbar = () => {
	const [showNavList, setShowNavList] = useState(false);
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('theme'))
	);

	console.log(darkMode);

	useEffect(() => {
		const currentMode = JSON.parse(localStorage.getItem('theme'));
		if (currentMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}

		const newMode = JSON.stringify(darkMode);
		localStorage.setItem('theme', newMode);
	}, [darkMode]);

	const toggleNavList = () => setShowNavList(!showNavList);

	return (
		<nav className="center nav">
			<ul
				style={{ display: showNavList ? 'flex' : null }}
				className="nav__list"
			>
				{projects.length ? (
					<li className="nav__list-item">
						<a
							href="#projects"
							onClick={toggleNavList}
							className="link link--nav"
						>
							Projects
						</a>
					</li>
				) : null}

				{skills.length ? (
					<li className="nav__list-item">
						<a
							href="#skills"
							onClick={toggleNavList}
							className="link link--nav"
						>
							Skills
						</a>
					</li>
				) : null}

				{contact.email ? (
					<li className="nav__list-item">
						<a
							href="#contact"
							onClick={toggleNavList}
							className="link link--nav"
						>
							Contact
						</a>
					</li>
				) : null}
			</ul>

			<button
				type="button"
				onClick={() => setDarkMode(!darkMode)}
				className="btn btn--icon nav__theme"
			>
				{darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
			</button>

			<button
				type="button"
				onClick={toggleNavList}
				className="btn btn--icon nav__hamburger"
				aria-label="toggle navigation"
			>
				{showNavList ? <AiOutlineClose /> : <AiOutlineMenu />}
			</button>
		</nav>
	);
};

export default Navbar;

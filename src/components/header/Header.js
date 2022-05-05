import React from 'react';
import { header } from '../../data';
import Navbar from '../navbar/Navbar';

import './Header.css';

const Header = () => {
	const { title } = header;

	return (
		<header className="header center">
			<h3>{title}</h3>
			<Navbar />
		</header>
	);
};

export default Header;

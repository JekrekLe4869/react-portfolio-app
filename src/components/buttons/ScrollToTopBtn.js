import React, { useEffect, useState } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

import './ScrollToTopBtn.css';

const ScrollToTopBtn = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return isVisible ? (
		<div className="scroll-top">
			<a href="#top">
				<BsFillArrowUpSquareFill className="scroll-top-icon" />
			</a>
		</div>
	) : null;
};

export default ScrollToTopBtn;

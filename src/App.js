import React from 'react';

import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ScrollToTopBtn from './components/buttons/ScrollToTopBtn';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
	return (
		<div id="top" className={`app`}>
			<Header />

			<main>
				<About />
				<Projects />
				<Skills />
				<Contact />
			</main>

			<ScrollToTopBtn />
			<Footer />
		</div>
	);
}

export default App;

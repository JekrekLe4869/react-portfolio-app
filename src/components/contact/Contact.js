import React, { useRef, useState } from 'react';
import { contact } from '../../data';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

import './Contact.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const form = useRef();

	if (!contact.email) return null;

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_d4hgdms',
				'template_plamtcj',
				form.current,
				'dc8crM1GFWrdWGFAh'
			)
			.then(
				(result) => {
					console.log(result.text);
					swal({
						title: 'Email sent successfully!',
						text: 'We try to reply in 24 hours. Please wait!',
					});
				},
				(error) => {
					console.log(error.text);
					swal({
						title: 'Oops!',
						text: 'Fields cannot be empty!',
					});
				}
			);

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<section className="section contact center" id="contact">
			<h2 className="section__title">Contact</h2>

			{/* Form */}
			<form
				ref={form}
				onSubmit={sendEmail}
				className="contact-form"
				id="contact-form"
			>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Your Name"
					className="contact-name"
					required
				/>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your Email Address"
					className="contact-email"
					required
				/>
				<textarea
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					cols="30"
					rows="10"
					placeholder="Write message here..."
					className="contact-message"
					required
				></textarea>
				<button className="send-btn">Send</button>
			</form>
			{/* <a href={`mailto:${contact.email}`}>
				<span type="button" className="btn btn--outline">
					Email me
				</span>
			</a> */}
		</section>
	);
};

export default Contact;

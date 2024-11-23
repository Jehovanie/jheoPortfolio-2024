import { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import "./contact.css";

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		let templateParams = {
			name: name,
			email: email,
			message: message,
		};
		// emailjs.send("service_94v4ag1", "template_voovpye", templateParams, "bm-vD__83zgRXzkNa");
	};

	return (
		<section id="contact">
			<h5>Get in Touch </h5>
			<h2> Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4> Email </h4>
						<h5>jehovanieram@gmail.com</h5>
						<a href="mailto:jehovanieram@gmail.com" target="_blank">
							{" "}
							Send a message ...
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4> WhatsApp </h4>
						<h5>+261 34 79 476 16</h5>
						<a href="https://api.whatsapp.com/send?phone=+261347947616" target="_blank">
							{" "}
							Send a message ...
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your full name ..."
						required
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						name="email"
						placeholder="Your email ..."
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						name="message"
						cols="30"
						rows="7"
						placeholder="Your message ..."
						required
						onChange={(e) => setMessage(e.target.value)}></textarea>
					<button type="submit" className="btn btn-primary" onClick={() => alert("clicked ... ")}>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

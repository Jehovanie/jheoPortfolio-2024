import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./contact.css";

const Contact = () => {
	const { t } = useTranslation();
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		if (!form.current) {
			console.error("form.current est null !");
			return;
		}

		emailjs
			.sendForm(
				"service_sj6d80s", // ✅ Ton Service ID
				"template_cdc1kfi", // ✅ Ton Template ID
				form.current, // ✅ Le formulaire DOM complet
				"bm-vD__83zgRXzkNa" // ✅ Ta clé publique
			)
			.then(
				(result) => {
					console.log("Succès :", result.text);
					alert("Email envoyé avec succès !");
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.error("Erreur EmailJS :", error.text);
					alert("Erreur lors de l'envoi de l'email.");
				}
			);
	};

	return (
		<section id="contact" className="contact_content_service">
			<h5>{t('contact.subtitle')}</h5>
			<h2>{t('contact.title')}</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<div className="contact_option_icon_name">
							<MdOutlineEmail className="contact__option-icon" />
							<h4>Email</h4>
						</div>
						<h5>jehovanieram@gmail.com</h5>
						<a href="mailto:jehovanieram@gmail.com" target="_blank" rel="noreferrer">
							Envoyer un message ...
						</a>
					</article>

					<article className="contact__option">
						<div className="contact_option_icon_name">
							<BsWhatsapp className="contact__option-icon" />
							<h4>WhatsApp</h4>
						</div>
						<h5>+261 34 38 612 46</h5>
						<a href="https://wa.me/261343861246" target="_blank" rel="noreferrer">
							Envoyer un message ...
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<div className="content_entete_forme">
						<h3 className="entete_forme_title">Message direct</h3>
					</div>
					<input
						type="text"
						name="name"
						placeholder="Votre nom..."
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						name="email"
						placeholder="Votre email..."
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						name="message"
						cols="30"
						rows="7"
						placeholder="Votre message..."
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}></textarea>
					<button type="submit" className="btn btn-primary">
						Envoyer
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

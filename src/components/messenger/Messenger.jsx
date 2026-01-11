import { useState } from "react";
import "./messenger.css";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { MdClose, MdEmail, MdSend } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/pdf/CV-Jehovanie-RAMANDRIJOEL.pdf";

const Messenger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});

	const toggleMessenger = () => {
		setIsOpen(!isOpen);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Envoyer le message par email
		const mailtoLink = `mailto:votreemail@example.com?subject=Message de ${formData.name}&body=${encodeURIComponent(
			`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		)}`;
		window.location.href = mailtoLink;
		
		// Réinitialiser le formulaire
		setFormData({ name: "", email: "", message: "" });
		setMessage("Message envoyé !");
		setTimeout(() => setMessage(""), 3000);
	};

	const handleDownloadCV = () => {
		const link = document.createElement("a");
		link.href = CV;
		link.download = "CV_Jehovanie_RAMANDRIJOEL.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleWhatsApp = () => {
		// Remplacer par votre numéro WhatsApp (format international sans +)
		const phoneNumber = "+261343861246";
		const whatsappMessage = "Bonjour, je souhaite vous contacter depuis votre portfolio.";
		window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
	};

	const handleEmail = () => {
		window.location.href = "mailto:votreemail@example.com";
	};

	return (
		<div className="messenger-container">
			{/* Bulle de messenger */}
			{!isOpen && (
				<div className="messenger-bubble" onClick={toggleMessenger}>
					<BsMessenger className="messenger-icon" />
				</div>
			)}

			{/* Card du messenger */}
			{isOpen && (
				<div className="messenger-card">
					<div className="messenger-header">
						<h3>Contactez-moi</h3>
						<button className="close-btn" onClick={toggleMessenger}>
							<MdClose />
						</button>
					</div>

					<div className="messenger-body">
						{/* Boutons d'action rapide */}
						<div className="quick-actions">
							<button className="action-btn download" onClick={handleDownloadCV}>
								<FaDownload />
								<span>Télécharger CV</span>
							</button>
							<button className="action-btn whatsapp" onClick={handleWhatsApp}>
								<BsWhatsapp />
								<span>WhatsApp</span>
							</button>
							<button className="action-btn email" onClick={handleEmail}>
								<MdEmail />
								<span>Email</span>
							</button>
						</div>

						{/* Formulaire de message */}
						<form onSubmit={handleSubmit} className="messenger-form">
							<div className="form-group">
								<input
									type="text"
									name="name"
									placeholder="Votre nom"
									value={formData.name}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									name="email"
									placeholder="Votre email"
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="form-group">
								<textarea
									name="message"
									placeholder="Votre message..."
									value={formData.message}
									onChange={handleInputChange}
									rows="4"
									required
								/>
							</div>
							<button type="submit" className="send-btn">
								<MdSend />
								<span>Envoyer</span>
							</button>
						</form>

						{message && <div className="success-message">{message}</div>}
					</div>
				</div>
			)}
		</div>
	);
};

export default Messenger;

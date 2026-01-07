import { FaLinkedinIn } from "react-icons/fa6";
import "./footer.css";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer-content">
				<div className="footer-section">
					<h3 className="footer-title">Portfolio</h3>
					<p className="footer-text">
						Développeur full-stack web & mobile avec 3+ ans d’expérience, expert en PHP,
						JavaScript/TypeScript et les frameworks React, Angular, Node.js. Spécialisé en bases de données,
						design systems et architectures web performantes. Autonome, rigoureux et engagé dans les
						environnements agiles.
					</p>
				</div>

				<div className="footer-section">
					<h3 className="footer-title">Liens rapides</h3>
					<ul className="footer-links">
						<li>
							<a href="#">Moi</a>
						</li>
						<li>
							<a href="#about">A propos de moi</a>
						</li>
						<li>
							<a href="#service">Mes savoir faire</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#projects">Project</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3 className="footer-title">Connect</h3>
					<div className="footer-icons">
						<a
							href="https://linkedin.com/in/jehovanie-ramandrijoel-17063b201"
							target="_blank"
							rel="noopener noreferrer">
							<FaLinkedinIn className="contact__option-icon" />
						</a>
						<a href="mailto:jehovanieram@gmail.com">
							<MdOutlineEmail className="contact__option-icon" />
						</a>
					</div>
				</div>
			</div>

			<hr className="ligne_separation"/>

			<div className="footer-bottom">
				©
				<span id="year" className="signature_year">
					2026,
				</span>
				<span className="signature_name"> Jehovanie RAMANDRIJOEL</span>
			</div>
		</footer>
	);
};

export default Footer;

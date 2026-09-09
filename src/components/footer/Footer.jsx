import { FaLinkedinIn } from "react-icons/fa6";
import "./footer.css";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
	const { t } = useTranslation();
	
	return (
		<footer className="footer">
			<div className="container footer-content">
				<div className="footer-section">
				<h3 className="footer-title">{t('footer.title')}</h3>
				<p className="footer-text">
					{t('footer.description')}
					</p>
				</div>

				<div className="footer-section">
				<h3 className="footer-title">{t('footer.links')}</h3>
				<ul className="footer-links">
					<li>
						<Link to="/#home">{t('footer.me')}</Link>
					</li>
					<li>
						<Link to="/#about">{t('footer.about')}</Link>
					</li>
					<li>
						<Link to="/#service">{t('footer.skills')}</Link>
					</li>
					<li>
						<Link to="/#experience">{t('footer.experience')}</Link>
					</li>
					<li>
						<Link to="/#project">{t('footer.projects')}</Link>
					</li>
					<li>
						<Link to="/#contact">{t('footer.contact')}</Link>
					</li>
				</ul>			</div>
				<div className="footer-section">
				<h3 className="footer-title">{t('footer.connect')}</h3>
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
				<span className="signature_name"> {t('footer.copyright')}</span>
			</div>
		</footer>
	);
};

export default Footer;

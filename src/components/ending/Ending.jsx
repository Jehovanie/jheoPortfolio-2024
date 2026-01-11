import { MdOutlineEmail } from "react-icons/md";
import BtnCv from "../presentation/macro/btnCV/BtnCv";
import "./ending.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Ending = () => {
	const { t } = useTranslation();
	
	return (
		<section id="contact" className="ending_container">
			<h1 className="ending_title">{t('ending.title')}</h1>
			<div className="content_load_cv">
				<BtnCv />
			</div>
			<div className="ending_text">
				<p className="title_joining">{t('ending.joinMe')}</p>
				<div className="content_social_ending">
					<article className="contact__option_ending">
						<a className="contact_option_icon_name" href="mailto:jehovanieram@gmail.com">
							<MdOutlineEmail className="contact__option-icon" />
							<h4>{t('ending.email')}</h4>
						</a>
					</article>
					<article className="contact__option_ending">
						<a className="contact_option_icon_name" href="https://wa.me/261343861246" target="_blank" rel="noreferrer">
							<BsWhatsapp className="contact__option-icon" />
							<h4>{t('ending.whatsapp')}</h4>
						</a>
					</article>
					<article className="contact__option_ending">
						<a className="contact_option_icon_name" href="https://github.com/Jehovanie" target="_blank" rel="noreferrer">
							<FaDiscord className="contact__option-icon" />
							<h4>{t('ending.discord')}</h4>
						</a>
					</article>
					
					<article className="contact__option_ending">
						<a
							className="contact_option_icon_name"
							href="https://linkedin.com/in/jehovanie-ramandrijoel-17063b201"
							target="_blank"
							rel="noreferrer">
							<FaLinkedinIn className="contact__option-icon" />
							<h4>{t('ending.linkedin')}</h4>
						</a>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Ending;

import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import BtnCv from "../presentation/macro/btnCV/BtnCv";
import "./ending.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useScrollAnimation, useScrollAnimationChildren } from "../../hooks/useScrollAnimation";

const Ending = () => {
	const { t } = useTranslation();
	const titleRef = useRef(null);
	const socialRef = useRef(null);

	useScrollAnimation(titleRef, {
		from: { opacity: 0, y: -30 },
		to: { opacity: 1, y: 0 },
		duration: 0.8,
	});

	useScrollAnimationChildren(socialRef, {
		from: { opacity: 0, scale: 0 },
		to: { opacity: 1, scale: 1 },
		stagger: 0.15,
		duration: 0.6,
	});
	
	return (
		<section id="contact" className="ending_container">
			<div ref={titleRef}>
				<h1 className="ending_title">{t('ending.title')}</h1>
				<div className="content_load_cv">
					<BtnCv />
				</div>
			</div>
			<div className="ending_text">
				<p className="title_joining">{t('ending.joinMe')}</p>
				<div className="content_social_ending" ref={socialRef}>
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

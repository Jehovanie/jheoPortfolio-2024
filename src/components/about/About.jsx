import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useScrollAnimation, useScrollAnimationChildren } from "../../hooks/useScrollAnimation";

import ME from "./../../assets/image/developpeur.png";

import "./about.css";

const About = () => {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const containerRef = useRef(null);
	
	useScrollAnimation(sectionRef, { from: { opacity: 0, y: 30 }, duration: 0.8 });
	useScrollAnimationChildren(containerRef, { stagger: 0.15, from: { opacity: 0, y: 40 } });
	
	return (
		<section id="about" className="section" ref={sectionRef}>
			<h5>{t('about.subtitle')}</h5>
			<h2>{t('about.title')}</h2>

			<div className="container about__container" ref={containerRef}>
				<div className="about__me show_tablette">
					<div className="about__me-image">
						<img src={ME} alt="About image" />
					</div>
				</div>

				<div className="about__content">
					<div className="content_about_image_laptop">
						<div className="about__me show_laptop">
							<div className="about__me-image">
								<img src={ME} alt="About image" />
							</div>
						</div>
						<div className="content_text_desc_laptop">
							<p>
								{t('about.description')}
							</p>
						</div>
					</div>
					<div className="content_about_client_laptop">
						<div className="content_about_cards">
							<div className="about__cards">
								<article className="about__card">
									<FaAward className="about__icon" />
									<h6>{t('about.experience')}</h6>
									<small>{t('about.experienceYears')}</small>
								</article>
								<article className="about__card">
									<FiUsers className="about__icon" />
									<h6>{t('about.clients')}</h6>
									<small>{t('about.clientsCount')}</small>
								</article>
								<article className="about__card">
									<VscFolderLibrary className="about__icon" />
									<h6>{t('about.projects')}</h6>
									<small>{t('about.projectsCount')}</small>
								</article>
							</div>
						</div>
						<div className="content_text_copy_writing_laptop">
							<p>
								{t('about.textSelling')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

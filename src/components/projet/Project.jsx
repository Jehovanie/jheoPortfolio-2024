import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useScrollAnimationChildren } from "../../hooks/useScrollAnimation";
import "./project.css";
import PropTypes from "prop-types";

import IMG1 from "./../../assets/image/ticketUp.png";
import IMG2 from "./../../assets/image/mySchool.png";
import IMG3 from "./../../assets/image/e-bookShare.png";

const getProjects = (t) => [
	{
		id: 1,
		image: IMG1,
		title: t('project.ticketUp.title'),
		description: t('project.ticketUp.description'),
		github: "https://github.com/Jehovanie/TicketUp-Api/tree/develop",
		live_demo: "",
	},
	{
		id: 2,
		image: IMG2,
		title: t('project.mySchool.title'),
		description: t('project.mySchool.description'),
		github: "https://gitlab.com/Jehovanie/myScholl-V-0.0.2",
		live_demo: "",
	},
	{
		id: 3,
		image: IMG3,
		title: t('project.ebookShare.title'),
		description: t('project.ebookShare.description'),
		github: "https://github.com/Jehovanie/E-bookShare-Front.git",
		live_demo: "",
	},
];

const ProjectCard = ({ image, title, description, github, live_demo, t }) => {
	return (
		<article className="project__item">
			<div className="project__item-image">
				<img src={image} alt="project image" />
			</div>
			<div className="content_project_description">
				<div>
					<h5 className="project_title">
						{title}
					</h5>
					<p className="project_description">
						{description}
					</p>
				</div>
				<div className="project__item-cta">
					<a href={github} className="btn" target="_blank">
						{t('project.github')}
					</a>
					{live_demo ?? (
						<a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							{t('project.liveDemo')}
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

ProjectCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	live_demo: PropTypes.string,
	t: PropTypes.func.isRequired,
};

const Project = () => {
	const { t } = useTranslation();
	const projects = getProjects(t);
	const sectionRef = useRef(null);
	const containerRef = useRef(null);
	
	useScrollAnimationChildren(containerRef, {
		from: { opacity: 0, y: 50, scale: 0.9 },
		to: { opacity: 1, y: 0, scale: 1 },
		stagger: 0.2,
		duration: 0.8,
	});
	
	return (
		<section id="project" className="experience_content_service" ref={sectionRef}>
			<h5>{t('project.subtitle')}</h5>
			<h2>{t('project.title')}</h2>

			<div className="container project__container" ref={containerRef}>
				{projects.map(item => (
					<ProjectCard
						key={item.id}
						{...item}
						t={t}
					/>
				))}
			</div>
		</section>
	);
};

export default Project;

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
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
		github: "https://github.com/Jehovanie/E-bookShare",
		live_demo: "https://e-bookshare.onrender.com",
	}
];

const ProjectCard = ({ image, title, description, github, live_demo, t }) => {
	return (
		<article className="project__item">
			{/* Image de fond */}
			<div className="project__item-image">
				<img src={image} alt={title} />
			</div>

			{/* Barre titre toujours visible en bas */}
			<div className="project__item-footer">
				<h5 className="project_title">{title}</h5>
				<span className="project__item-indicator">↗</span>
			</div>

			{/* Overlay au survol */}
			<div className="content_project_description">
				<div className="project__overlay-content">
					<h5 className="project_title">{title}</h5>
					<p className="project_description">{description}</p>
				</div>
				<div className="project__item-cta">
					<a href={github} className="btn" target="_blank" rel="noreferrer">
						{t('project.github')}
					</a>
					{live_demo && (
						<a href={live_demo} className="btn btn-primary" target="_blank" rel="noreferrer">
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

const STEP = 3;

const Project = () => {
	const { t } = useTranslation();
	const projects = [
		...getProjects(t),
		...getProjects(t),
		...getProjects(t),
		...getProjects(t)
	];
	const sectionRef = useRef(null);
	const containerRef = useRef(null);
	const [visibleCount, setVisibleCount] = useState(STEP);

	const visibleProjects = projects.slice(0, visibleCount);
	const hasMore = visibleCount < projects.length;

	useScrollAnimationChildren(containerRef, {
		from: { opacity: 0, y: 50, scale: 0.9 },
		to: { opacity: 1, y: 0, scale: 1 },
		stagger: 0.2,
		duration: 0.8,
	});

	const handleLoadMore = () => {
		setVisibleCount((prev) => Math.min(prev + STEP, projects.length));
	};
	
	return (
		<section id="project" className="experience_content_service" ref={sectionRef}>
			<h5>{t('project.subtitle')}</h5>
			<h2>{t('project.title')}</h2>

			<div className="container project__container" ref={containerRef}>
				{visibleProjects.map((item, index) => (
					<ProjectCard
						key={`${item.id}-${index}`}
						{...item}
						t={t}
					/>
				))}
			</div>

			{hasMore && (
				<div className="project__load-more">
					<button className="btn project__load-more-btn" onClick={handleLoadMore}>
						{t('loadMore') || 'Voir la suite'}
					</button>
				</div>
			)}
		</section>
	);
};

export default Project;

import { useTranslation } from "react-i18next";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";

import { useScrollAnimationChildren } from "../../hooks/useScrollAnimation";
import { getProjects, getTechIcon, projectPath } from "@/data/projects";
import { projectShape } from "@/data/projectShape";
import "./project.css";

/** Nombre de technos affichées sur la carte ; le reste est résumé en "+N". */
const CARD_STACK_LIMIT = 4;

/** Options GSAP figées hors du composant : le hook les garde en dépendance. */
const REVEAL = {
	from: { opacity: 0, y: 50, scale: 0.9 },
	to: { opacity: 1, y: 0, scale: 1 },
	stagger: 0.2,
	duration: 0.8,
};

const ProjectCard = ({ project, t }) => {
	const { image, images, title, description, year, stack, slug } = project;
	const captureCount = images.length;
	const visibleStack = (stack || []).slice(0, CARD_STACK_LIMIT);
	const hiddenStack = (stack || []).length - visibleStack.length;

	return (
		<article className="project__item">
			{/* Le lien couvre toute la carte : un seul élément focusable, un seul clic. */}
			<Link
				to={projectPath(slug)}
				className="project__item-link"
				aria-label={t("project.openDetails", { title })}>
				<div className="project__item-image">
					<img src={image} alt={title} loading="lazy" />
				</div>

				<div className="project__item-veil" />

				{captureCount > 1 && (
					<span className="project__item-count">
						{t("project.captureCount", { count: captureCount })}
					</span>
				)}

				<div className="project__item-body">
					{year && <span className="project__item-year">{year}</span>}
					<h5 className="project_title">{title}</h5>
					<p className="project_description">{description}</p>

					{visibleStack.length > 0 && (
						<ul className="project__item-stack">
							{visibleStack.map((tech) => {
								const icon = getTechIcon(tech);
								return (
									<li key={tech}>
										{icon && <img src={icon} alt="" aria-hidden="true" />}
										<span>{tech}</span>
									</li>
								);
							})}
							{hiddenStack > 0 && <li className="more">+{hiddenStack}</li>}
						</ul>
					)}

					<span className="project__item-cta">
						{t("project.viewCaseStudy")}
						<FiArrowUpRight />
					</span>
				</div>
			</Link>
		</article>
	);
};

ProjectCard.propTypes = {
	project: projectShape.isRequired,
	t: PropTypes.func.isRequired,
};

const STEP = 3;

const Project = () => {
	const { t } = useTranslation();
	const projects = useMemo(() => getProjects(t), [t]);
	const sectionRef = useRef(null);
	const containerRef = useRef(null);
	const [visibleCount, setVisibleCount] = useState(STEP);

	const visibleProjects = projects.slice(0, visibleCount);
	const hasMore = visibleCount < projects.length;

	useScrollAnimationChildren(containerRef, REVEAL);

	const handleLoadMore = () => {
		setVisibleCount((prev) => Math.min(prev + STEP, projects.length));
	};

	return (
		<section id="project" className="experience_content_service" ref={sectionRef}>
			<h5>{t("project.subtitle")}</h5>
			<h2>{t("project.title")}</h2>

			<div className="container project__container" ref={containerRef}>
				{visibleProjects.map((item) => (
					<ProjectCard key={item.id} project={item} t={t} />
				))}
			</div>

			{hasMore && (
				<div className="project__load-more">
					<button className="btn project__load-more-btn" onClick={handleLoadMore}>
						{t("loadMore")}
					</button>
				</div>
			)}
		</section>
	);
};

export default Project;

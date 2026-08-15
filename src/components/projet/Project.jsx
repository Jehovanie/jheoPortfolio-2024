import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useScrollAnimationChildren } from "../../hooks/useScrollAnimation";
import "./project.css";
import PropTypes from "prop-types";

import {
	angular,
	docker,
	express,
	javascript,
	laravel,
	mongodb,
	mysql,
	nestjs,
	nextjs,
	nodejs,
	php,
	postgresql,
	react,
	reactNative,
	redux,
	symfony,
	tailwind,
	typescript,
} from "@/constant/svg";

import IMG1 from "./../../assets/image/ticketUp.png";
import IMG2 from "./../../assets/image/mySchool.png";
import IMG3 from "./../../assets/image/e-bookShare.png";

/** Icônes de stack : clé = nom de la techno en minuscules. */
const TECH_ICONS = {
	"react native": reactNative,
	react: react,
	angular: angular,
	typescript: typescript,
	javascript: javascript,
	symfony: symfony,
	laravel: laravel,
	php: php,
	nestjs: nestjs,
	nodejs: nodejs,
	express: express,
	nextjs: nextjs,
	redux: redux,
	tailwind: tailwind,
	postgresql: postgresql,
	mysql: mysql,
	mongodb: mongodb,
	docker: docker,
};

/**
 * Captures de projet : un dossier par projet dans `assets/image/projects/<slug>/`.
 * Toute image déposée dans le dossier est reprise automatiquement (voir le
 * README de ce dossier). Tri alphanumérique sur le chemin => préfixer les
 * fichiers (01-, 02-, ...) pour maîtriser l'ordre du carrousel.
 */
const captureModules = import.meta.glob(
	"./../../assets/image/projects/*/*.{png,jpg,jpeg,webp,avif}",
	{ eager: true, import: "default" }
);

const capturesBySlug = Object.keys(captureModules)
	.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
	.reduce((acc, path) => {
		const slug = path.split("/").slice(-2)[0];
		if (!acc[slug]) acc[slug] = [];
		acc[slug].push(captureModules[path]);
		return acc;
	}, {});

/** La couverture ouvre toujours la galerie, suivie des captures du dossier. */
const buildGallery = (slug, cover) => [cover, ...(capturesBySlug[slug] || [])];

/** Récupère un tableau de traductions (features) sans planter si la clé manque. */
const getList = (t, key) => {
	const value = t(key, { returnObjects: true, defaultValue: [] });
	return Array.isArray(value) ? value : [];
};

const getProjects = (t) => [
	{
		id: 1,
		slug: "ticketUp",
		image: IMG1,
		images: buildGallery("ticketUp", IMG1),
		year: "2025",
		stack: [
			"React Native",
			"Angular",
			"TypeScript",
			"Symfony",
			"API Platform",
			"PostgreSQL",
			"NodeJS",
			"Mercure",
		],
		title: t("project.ticketUp.title"),
		description: t("project.ticketUp.description"),
		problem: t("project.ticketUp.problem"),
		solution: t("project.ticketUp.solution"),
		features: getList(t, "project.ticketUp.features"),
		role: t("project.ticketUp.role"),
		github: "https://github.com/Jehovanie/TicketUp-Api/tree/develop",
		live_demo: "",
	},
	{
		id: 2,
		slug: "mySchool",
		image: IMG2,
		images: buildGallery("mySchool", IMG2),
		year: "2022",
		// TODO: ajuster la stack réelle de MySchool si besoin
		stack: ["Symfony", "PHP", "JavaScript", "MySQL", "Tailwind"],
		title: t("project.mySchool.title"),
		description: t("project.mySchool.description"),
		problem: t("project.mySchool.problem"),
		solution: t("project.mySchool.solution"),
		features: getList(t, "project.mySchool.features"),
		role: t("project.mySchool.role"),
		github: "https://gitlab.com/Jehovanie/myScholl-V-0.0.2",
		live_demo: "",
	},
	{
		id: 3,
		slug: "ebookShare",
		image: IMG3,
		images: buildGallery("ebookShare", IMG3),
		year: "2023",
		// TODO: ajuster la stack réelle de E-bookShare si besoin
		stack: ["React", "Redux", "NodeJS", "Express", "MongoDB"],
		title: t("project.ebookShare.title"),
		description: t("project.ebookShare.description"),
		problem: t("project.ebookShare.problem"),
		solution: t("project.ebookShare.solution"),
		features: getList(t, "project.ebookShare.features"),
		role: t("project.ebookShare.role"),
		github: "https://github.com/Jehovanie/E-bookShare",
		live_demo: "https://e-bookshare.onrender.com",
	},
];

const ProjectCard = ({ project, onOpen, t }) => {
	const { image, images, title, description, github, live_demo } = project;
	const captureCount = images.length;

	return (
		<article
			className="project__item"
			role="button"
			tabIndex={0}
			aria-label={t("project.openDetails", { title })}
			onClick={() => onOpen(project)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onOpen(project);
				}
			}}
		>
			{/* Image de fond */}
			<div className="project__item-image">
				<img src={image} alt={title} loading="lazy" />
			</div>

			{/* Compteur de captures */}
			{captureCount > 1 && (
				<span className="project__item-count">
					{t("project.captureCount", { count: captureCount })}
				</span>
			)}

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
					{/* stopPropagation : les liens ne doivent pas ouvrir la modal */}
					<a
						href={github}
						className="btn"
						target="_blank"
						rel="noreferrer"
						onClick={(e) => e.stopPropagation()}
					>
						{t("project.github")}
					</a>
					{live_demo && (
						<a
							href={live_demo}
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.stopPropagation()}
						>
							{t("project.liveDemo")}
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

const projectShape = PropTypes.shape({
	id: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	year: PropTypes.string,
	stack: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	problem: PropTypes.string,
	solution: PropTypes.string,
	features: PropTypes.arrayOf(PropTypes.string),
	role: PropTypes.string,
	github: PropTypes.string.isRequired,
	live_demo: PropTypes.string,
});

ProjectCard.propTypes = {
	project: projectShape.isRequired,
	onOpen: PropTypes.func.isRequired,
	t: PropTypes.func.isRequired,
};

/** Bloc "titre + texte" du panneau de droite, masqué si le contenu est vide. */
const ModalSection = ({ label, children }) => {
	if (!children) return null;
	return (
		<div className="project__modal-section">
			<h4 className="project__modal-section-title">{label}</h4>
			{children}
		</div>
	);
};

ModalSection.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.node,
};

const ProjectModal = ({ project, onClose, t }) => {
	const {
		images,
		title,
		description,
		problem,
		solution,
		features,
		role,
		stack,
		github,
		live_demo,
	} = project;
	const [index, setIndex] = useState(0);
	const closeRef = useRef(null);
	const thumbsRef = useRef(null);
	const total = images.length;

	const goTo = useCallback(
		(next) => setIndex(((next % total) + total) % total),
		[total]
	);
	const prev = useCallback(() => goTo(index - 1), [goTo, index]);
	const next = useCallback(() => goTo(index + 1), [goTo, index]);

	// Escape / flèches + verrouillage du scroll de la page
	useEffect(() => {
		const onKeyDown = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		document.addEventListener("keydown", onKeyDown);

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [onClose, prev, next]);

	// Garde la miniature active visible dans la bande défilante
	useEffect(() => {
		const active = thumbsRef.current?.children[index];
		active?.scrollIntoView({ block: "nearest", inline: "nearest" });
	}, [index]);

	return createPortal(
		<div
			className="project__modal-backdrop"
			role="dialog"
			aria-modal="true"
			aria-label={title}
			onClick={onClose}
		>
			<div className="project__modal" onClick={(e) => e.stopPropagation()}>
				<button
					ref={closeRef}
					className="project__modal-close"
					onClick={onClose}
					aria-label={t("project.close")}
				>
					<FiX />
				</button>

				<div className="project__modal-layout">
					{/* ══ Colonne gauche : galerie ══ */}
					<div className="project__modal-gallery">
						<div className="project__carousel">
							<div
								className="project__carousel-track"
								style={{ transform: `translateX(-${index * 100}%)` }}
							>
								{images.map((src, i) => (
									<div className="project__carousel-slide" key={`${src}-${i}`}>
										<img
											src={src}
											alt={t("project.captureAlt", {
												title,
												index: i + 1,
												total,
											})}
											loading={i === 0 ? "eager" : "lazy"}
										/>
									</div>
								))}
							</div>

							{total > 1 && (
								<>
									<button
										className="project__carousel-nav project__carousel-nav--prev"
										onClick={prev}
										aria-label={t("project.previous")}
									>
										<FiChevronLeft />
									</button>
									<button
										className="project__carousel-nav project__carousel-nav--next"
										onClick={next}
										aria-label={t("project.next")}
									>
										<FiChevronRight />
									</button>
									<span className="project__carousel-counter">
										{index + 1} / {total}
									</span>
								</>
							)}
						</div>

						{/* Miniatures */}
						{total > 1 && (
							<div className="project__thumbs" ref={thumbsRef}>
								{images.map((src, i) => (
									<button
										key={`thumb-${src}-${i}`}
										className={`project__thumb${
											i === index ? " active" : ""
										}`}
										onClick={() => goTo(i)}
										aria-label={t("project.goToCapture", { index: i + 1 })}
										aria-current={i === index}
									>
										<img src={src} alt="" loading="lazy" />
									</button>
								))}
							</div>
						)}
					</div>

					{/* ══ Colonne droite : contenu ══ */}
					<div className="project__modal-content">
						<header className="project__modal-header">
							<h3 className="project__modal-title">{title}</h3>
						</header>

						{stack?.length > 0 && (
							<ul className="project__modal-stack">
								{stack.map((tech) => {
									const icon = TECH_ICONS[tech.toLowerCase()];
									return (
										<li className="project__modal-stack-item" key={tech}>
											{icon && <img src={icon} alt="" aria-hidden="true" />}
											<span>{tech}</span>
										</li>
									);
								})}
							</ul>
						)}

						<ModalSection label={t("project.sections.overview")}>
							<p className="project__modal-text">{description}</p>
						</ModalSection>

						<ModalSection label={t("project.sections.problem")}>
							{problem && <p className="project__modal-text">{problem}</p>}
						</ModalSection>

						<ModalSection label={t("project.sections.solution")}>
							{solution && <p className="project__modal-text">{solution}</p>}
						</ModalSection>

						<ModalSection label={t("project.sections.features")}>
							{features?.length > 0 && (
								<ul className="project__modal-list">
									{features.map((feature) => (
										<li key={feature}>{feature}</li>
									))}
								</ul>
							)}
						</ModalSection>

						<ModalSection label={t("project.sections.role")}>
							{role && <p className="project__modal-text">{role}</p>}
						</ModalSection>

						<div className="project__modal-cta">
							<a href={github} className="btn" target="_blank" rel="noreferrer">
								{t("project.github")}
							</a>
							{live_demo && (
								<a
									href={live_demo}
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									{t("project.liveDemo")}
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};

ProjectModal.propTypes = {
	project: projectShape.isRequired,
	onClose: PropTypes.func.isRequired,
	t: PropTypes.func.isRequired,
};

const STEP = 3;

const Project = () => {
	const { t } = useTranslation();
	const projects = [
		...getProjects(t)
	];
	const sectionRef = useRef(null);
	const containerRef = useRef(null);
	const [visibleCount, setVisibleCount] = useState(STEP);
	const [activeProject, setActiveProject] = useState(null);

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

	const closeModal = useCallback(() => setActiveProject(null), []);

	return (
		<section id="project" className="experience_content_service" ref={sectionRef}>
			<h5>{t('project.subtitle')}</h5>
			<h2>{t('project.title')}</h2>

			<div className="container project__container" ref={containerRef}>
				{visibleProjects.map((item, index) => (
					<ProjectCard
						key={`${item.id}-${index}`}
						project={item}
						onOpen={setActiveProject}
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

			{activeProject && (
				<ProjectModal project={activeProject} onClose={closeModal} t={t} />
			)}
		</section>
	);
};

export default Project;

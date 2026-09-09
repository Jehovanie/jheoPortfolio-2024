import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import {
	FiArrowLeft,
	FiArrowRight,
	FiChevronLeft,
	FiChevronRight,
	FiExternalLink,
	FiGithub,
	FiMaximize2,
	FiX,
} from "react-icons/fi";
import PropTypes from "prop-types";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useScrollAnimationChildren } from "../hooks/useScrollAnimation";
import { findProject, getProjects, getTechIcon, projectPath } from "@/data/projects";
import { projectShape } from "@/data/projectShape";
import "./projectDetail.css";

/* Hauteur navbar (4rem) + barre fil d'Ariane (~3rem) : marge de scroll pour que
   le titre d'une section ne passe pas sous les barres fixes. */
const SCROLL_OFFSET = 132;

/** Options GSAP figées hors du composant : le hook les garde en dépendance. */
const REVEAL = {
	from: { opacity: 0, y: 40 },
	to: { opacity: 1, y: 0 },
	stagger: 0.12,
	duration: 0.7,
};

/* ═══════════════════════════ Lightbox ═══════════════════════════ */

const Lightbox = ({ images, startIndex, title, onClose, t }) => {
	const [index, setIndex] = useState(startIndex);
	const closeRef = useRef(null);
	const total = images.length;

	const goTo = useCallback(
		(next) => setIndex(((next % total) + total) % total),
		[total]
	);
	const prev = useCallback(() => goTo(index - 1), [goTo, index]);
	const next = useCallback(() => goTo(index + 1), [goTo, index]);

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

	return createPortal(
		<div
			className="pd-lightbox"
			role="dialog"
			aria-modal="true"
			aria-label={title}
			onClick={onClose}>
			<button
				ref={closeRef}
				className="pd-lightbox__close"
				onClick={onClose}
				aria-label={t("project.close")}>
				<FiX />
			</button>

			<figure className="pd-lightbox__figure" onClick={(e) => e.stopPropagation()}>
				<img
					src={images[index]}
					alt={t("project.captureAlt", { title, index: index + 1, total })}
				/>
			</figure>

			{total > 1 && (
				<>
					<button
						className="pd-lightbox__nav pd-lightbox__nav--prev"
						onClick={(e) => {
							e.stopPropagation();
							prev();
						}}
						aria-label={t("project.previous")}>
						<FiChevronLeft />
					</button>
					<button
						className="pd-lightbox__nav pd-lightbox__nav--next"
						onClick={(e) => {
							e.stopPropagation();
							next();
						}}
						aria-label={t("project.next")}>
						<FiChevronRight />
					</button>
					<span className="pd-lightbox__counter">
						{index + 1} / {total}
					</span>
				</>
			)}
		</div>,
		document.body
	);
};

Lightbox.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	startIndex: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	t: PropTypes.func.isRequired,
};

/* ═══════════════════════ Blocs de contenu ═══════════════════════ */

const StackList = ({ stack, className }) => (
	<ul className={className}>
		{stack.map((tech) => {
			const icon = getTechIcon(tech);
			return (
				<li key={tech}>
					{icon && <img src={icon} alt="" aria-hidden="true" />}
					<span>{tech}</span>
				</li>
			);
		})}
	</ul>
);

StackList.propTypes = {
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
	className: PropTypes.string.isRequired,
};

/** Carte de navigation vers le projet précédent / suivant. */
const SiblingLink = ({ project, direction, label }) => (
	<Link
		to={projectPath(project.slug)}
		className={`pd-sibling pd-sibling--${direction}`}>
		<span className="pd-sibling__label">
			{direction === "prev" && <FiArrowLeft />}
			{label}
			{direction === "next" && <FiArrowRight />}
		</span>
		<span className="pd-sibling__title">{project.title}</span>
		<img src={project.image} alt="" aria-hidden="true" />
	</Link>
);

SiblingLink.propTypes = {
	project: projectShape.isRequired,
	direction: PropTypes.oneOf(["prev", "next"]).isRequired,
	label: PropTypes.string.isRequired,
};

/* ═══════════════════════════ Page ═══════════════════════════════ */

const ProjectDetail = () => {
	const { t } = useTranslation();
	const { slug } = useParams();

	/* Mémoïsé : `getProjects` reconstruit les objets à chaque appel, et un
	   `project` d'identité nouvelle relancerait les effets à chaque rendu. */
	const projects = useMemo(() => getProjects(t), [t]);
	const { project, previous, next } = useMemo(
		() => findProject(projects, slug),
		[projects, slug]
	);

	const [progress, setProgress] = useState(0);
	const [activeSection, setActiveSection] = useState("");
	const [lightboxIndex, setLightboxIndex] = useState(null);
	const contentRef = useRef(null);
	const galleryRef = useRef(null);

	/* Sections réellement remplies : la table des matières ne liste jamais un
	   ancrage vide. */
	const sections = useMemo(() => {
		if (!project) return [];
		return [
			{ id: "apercu", label: t("project.sections.overview"), value: project.description },
			{ id: "probleme", label: t("project.sections.problem"), value: project.problem },
			{ id: "solution", label: t("project.sections.solution"), value: project.solution },
			{
				id: "fonctionnalites",
				label: t("project.sections.features"),
				value: project.features?.length ? project.features : "",
			},
			{ id: "role", label: t("project.sections.role"), value: project.role },
		].filter((section) => section.value);
	}, [project, t]);

	// Onglet du navigateur : le titre suit le projet consulté.
	useEffect(() => {
		if (!project) return undefined;
		const previousTitle = document.title;
		document.title = `${project.title} — Jehovanie R.`;
		return () => {
			document.title = previousTitle;
		};
	}, [project]);

	// Barre de progression + surlignage de la section courante, dans un seul
	// listener de scroll amorti par requestAnimationFrame.
	useEffect(() => {
		if (!project) return undefined;
		let frame = null;

		const update = () => {
			frame = null;
			const scrolled = window.scrollY;
			const height = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(height > 0 ? Math.min(scrolled / height, 1) : 0);

			let current = "";
			sections.forEach(({ id }) => {
				const element = document.getElementById(id);
				if (element && element.getBoundingClientRect().top <= SCROLL_OFFSET + 20) {
					current = id;
				}
			});
			setActiveSection(current);
		};

		const onScroll = () => {
			if (frame === null) frame = window.requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame !== null) window.cancelAnimationFrame(frame);
		};
	}, [project, sections]);

	useScrollAnimationChildren(contentRef, REVEAL);
	useScrollAnimationChildren(galleryRef, REVEAL);

	const closeLightbox = useCallback(() => setLightboxIndex(null), []);

	/* Ancre de la table des matières : `scroll-margin-top` en CSS place la
	   section sous les barres fixes, on ne gère ici que la douceur du saut. */
	const scrollToSection = useCallback((event, id) => {
		const element = document.getElementById(id);
		if (!element) return;
		event.preventDefault();
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		element.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
		window.history.replaceState(null, "", `#${id}`);
		setActiveSection(id);
	}, []);

	if (!project) {
		return (
			<div className="pd">
				<Navbar />
				<div className="pd-missing container">
					<h1>{t("project.detail.notFound.title")}</h1>
					<p>{t("project.detail.notFound.text")}</p>
					<Link to="/#project" className="btn btn-primary">
						{t("project.detail.back")}
					</Link>
				</div>
				<Footer />
			</div>
		);
	}

	const { title, description, image, images, year, stack, features, role, github, live_demo } =
		project;

	return (
		<div className="pd">
			<Navbar />

			<div
				className="pd-progress"
				role="progressbar"
				aria-label={t("project.detail.readingProgress")}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={Math.round(progress * 100)}>
				<span style={{ transform: `scaleX(${progress})` }} />
			</div>

			{/* ── Fil d'Ariane collant : retour toujours à portée de pouce ── */}
			<nav className="pd-crumb" aria-label={t("project.detail.breadcrumb")}>
				<div className="container pd-crumb__inner">
					<Link to="/#project" className="pd-crumb__back">
						<FiArrowLeft />
						<span>{t("project.detail.back")}</span>
					</Link>
					<ol className="pd-crumb__trail">
						<li>
							<Link to="/">{t("project.detail.breadcrumbHome")}</Link>
						</li>
						<li>
							<Link to="/#project">{t("project.detail.breadcrumbProjects")}</Link>
						</li>
						<li aria-current="page">{title}</li>
					</ol>
				</div>
			</nav>

			{/* ══════════════════ Hero ══════════════════ */}
			<header className="pd-hero">
				<div className="pd-hero__glow" aria-hidden="true" />
				<div className="container pd-hero__inner">
					<div className="pd-hero__text">
						<p className="pd-hero__eyebrow">
							{t("project.detail.breadcrumbProjects")}
							{year && <span className="pd-hero__dot" aria-hidden="true">•</span>}
							{year}
						</p>
						<h1 className="pd-hero__title">{title}</h1>
						<p className="pd-hero__lead">{description}</p>

						{stack?.length > 0 && (
							<StackList stack={stack} className="pd-hero__stack" />
						)}

						<div className="pd-hero__cta">
							<a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">
								<FiGithub />
								{t("project.github")}
							</a>
							{live_demo && (
								<a href={live_demo} className="btn" target="_blank" rel="noreferrer">
									<FiExternalLink />
									{t("project.liveDemo")}
								</a>
							)}
						</div>
					</div>

					<figure className="pd-hero__visual">
						<img src={image} alt={title} />
					</figure>
				</div>
			</header>

			{/* ══════════════════ Chiffres clés ══════════════════ */}
			<div className="container pd-facts">
				{year && (
					<div className="pd-fact">
						<span className="pd-fact__label">{t("project.detail.facts.year")}</span>
						<span className="pd-fact__value">{year}</span>
					</div>
				)}
				{stack?.length > 0 && (
					<div className="pd-fact">
						<span className="pd-fact__label">{t("project.detail.facts.stack")}</span>
						<span className="pd-fact__value">{stack.length}</span>
					</div>
				)}
				<div className="pd-fact">
					<span className="pd-fact__label">{t("project.detail.facts.captures")}</span>
					<span className="pd-fact__value">{images.length}</span>
				</div>
			</div>

			{/* ══════════════════ Corps : contenu + colonne collante ══════════════════ */}
			<div className="container pd-body">
				<article className="pd-content" ref={contentRef}>
					<section id="apercu" className="pd-section">
						<h2 className="pd-section__title">{t("project.sections.overview")}</h2>
						<p className="pd-section__text pd-section__text--lead">{description}</p>
					</section>

					{project.problem && (
						<section id="probleme" className="pd-section">
							<h2 className="pd-section__title">{t("project.sections.problem")}</h2>
							<p className="pd-section__text">{project.problem}</p>
						</section>
					)}

					{project.solution && (
						<section id="solution" className="pd-section">
							<h2 className="pd-section__title">{t("project.sections.solution")}</h2>
							<p className="pd-section__text">{project.solution}</p>
						</section>
					)}

					{features?.length > 0 && (
						<section id="fonctionnalites" className="pd-section">
							<h2 className="pd-section__title">{t("project.sections.features")}</h2>
							<ul className="pd-features">
								{features.map((feature, i) => (
									<li key={feature}>
										<span className="pd-features__index">
											{String(i + 1).padStart(2, "0")}
										</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{role && (
						<section id="role" className="pd-section">
							<h2 className="pd-section__title">{t("project.sections.role")}</h2>
							<p className="pd-section__text">{role}</p>
						</section>
					)}
				</article>

				<aside className="pd-aside">
					<div className="pd-aside__sticky">
						{sections.length > 1 && (
							<nav className="pd-card pd-toc" aria-label={t("project.detail.onThisPage")}>
								<h3 className="pd-card__title">{t("project.detail.onThisPage")}</h3>
								<ul>
									{sections.map(({ id, label }) => (
										<li key={id}>
											<a
												href={`#${id}`}
												onClick={(e) => scrollToSection(e, id)}
												className={activeSection === id ? "active" : ""}
												aria-current={activeSection === id ? "true" : undefined}>
												{label}
											</a>
										</li>
									))}
								</ul>
							</nav>
						)}

						{stack?.length > 0 && (
							<div className="pd-card">
								<h3 className="pd-card__title">{t("project.detail.stackTitle")}</h3>
								<StackList stack={stack} className="pd-aside__stack" />
							</div>
						)}

						<div className="pd-card">
							<h3 className="pd-card__title">{t("project.detail.linksTitle")}</h3>
							<div className="pd-aside__links">
								<a href={github} target="_blank" rel="noreferrer">
									<FiGithub />
									<span>{t("project.github")}</span>
									<FiExternalLink className="pd-aside__links-out" />
								</a>
								{live_demo && (
									<a href={live_demo} target="_blank" rel="noreferrer">
										<FiExternalLink />
										<span>{t("project.liveDemo")}</span>
										<FiExternalLink className="pd-aside__links-out" />
									</a>
								)}
							</div>
						</div>
					</div>
				</aside>
			</div>

			{/* ══════════════════ Galerie ══════════════════ */}
			<section className="container pd-gallery">
				<header className="pd-gallery__header">
					<h2 className="pd-section__title">{t("project.detail.gallery.title")}</h2>
					<p className="pd-gallery__subtitle">{t("project.detail.gallery.subtitle")}</p>
				</header>

				<div className="pd-gallery__grid" ref={galleryRef}>
					{images.map((src, i) => (
						<button
							key={`${src}-${i}`}
							className="pd-shot"
							onClick={() => setLightboxIndex(i)}
							aria-label={t("project.detail.zoom", { index: i + 1 })}>
							<img
								src={src}
								alt={t("project.captureAlt", {
									title,
									index: i + 1,
									total: images.length,
								})}
								loading={i === 0 ? "eager" : "lazy"}
							/>
							<span className="pd-shot__zoom" aria-hidden="true">
								<FiMaximize2 />
							</span>
						</button>
					))}
				</div>
			</section>

			{/* ══════════════════ Projets voisins ══════════════════ */}
			{(previous || next) && (
				<nav className="container pd-siblings" aria-label={t("project.detail.moreProjects")}>
					{previous && (
						<SiblingLink
							project={previous}
							direction="prev"
							label={t("project.detail.previousProject")}
						/>
					)}
					{next && (
						<SiblingLink
							project={next}
							direction="next"
							label={t("project.detail.nextProject")}
						/>
					)}
				</nav>
			)}

			{/* ══════════════════ Appel à l'action ══════════════════ */}
			<section className="container pd-outro">
				<h2>{t("project.detail.cta.title")}</h2>
				<p>{t("project.detail.cta.text")}</p>
				<Link to="/#contact" className="btn btn-primary">
					{t("project.detail.cta.button")}
				</Link>
			</section>

			<Footer />

			{lightboxIndex !== null && (
				<Lightbox
					images={images}
					startIndex={lightboxIndex}
					title={title}
					onClose={closeLightbox}
					t={t}
				/>
			)}
		</div>
	);
};

export default ProjectDetail;

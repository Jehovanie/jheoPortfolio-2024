import { RiMenu2Line } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import PropTypes from "prop-types";

import "./navbar.css";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import gsap from "gsap";

import CV from "../../assets/pdf/CV-Jehovanie-RAMANDRIJOEL.pdf";

/** Sections observées pour l'état actif ; hors composant, la référence est stable. */
const SECTIONS = ["home", "about", "service", "experience", "project", "contact"];

/** Langues proposées, dans l'ordre d'affichage du sélecteur. */
const LANGUAGES = ["fr", "en"];

const MOBILE_MENU_ID = "navbar-mobile-menu";

const IconMenuMobile = ({ isOpen, toggleMenu, label }) => {
	return (
		/* Un vrai <button> : accessible au clavier et son état est annoncé. */
		<button
			type="button"
			className="menu_button"
			onClick={() => toggleMenu(!isOpen)}
			aria-label={label}
			aria-expanded={isOpen}
			aria-controls={MOBILE_MENU_ID}>
			{isOpen ? (
				<RiMenu3Fill className="menu_icon" aria-hidden="true" />
			) : (
				<RiMenu2Line className="menu_icon" aria-hidden="true" />
			)}
		</button>
	);
};

IconMenuMobile.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
};

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const [activeNav, setActiveNav] = useState("#home");
	const [isShowListMenu, setIsShowListMenu] = useState(false);
	/* `i18n.language` peut valoir "fr-FR" : on ne garde que le code court. */
	const [lang, setLang] = useState((i18n.language || "fr").split("-")[0]);
	const navbarRef = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem("language", language);
		setLang(language);
	};

	// Animation GSAP pour la navbar au scroll
	useEffect(() => {
		
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			
			if (currentScrollY > 100 && !hasAnimated) {
				gsap.to(navbarRef.current, {
					y: 0,
					opacity: 1,
					boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
					backdropFilter: "blur(15px)",
					duration: 0.3,
					ease: "power2.out",
				});
				setHasAnimated(true);
			} else if (currentScrollY <= 100 && hasAnimated) {
				gsap.to(navbarRef.current, {
					boxShadow: "none",
					duration: 0.3,
					backdropFilter: "blur(15px)",
					ease: "power2.out",
				});
				setHasAnimated(false);
			}
			
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [hasAnimated]);

	useEffect(() => {
		// Créer l'IntersectionObserver
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Si la section est visible, mettre à jour activeNav avec son ID
						const sectionId = entry.target.id ? `#${entry.target.id}` : "#";
						setActiveNav(sectionId);
					}
				});
			},
			{
				root: null, // Utiliser le viewport comme racine
				rootMargin: "0px",
				threshold: 0.8, // Une section est considérée visible si 50 % est dans le viewport
			}
		);

		// Observer chaque section
		SECTIONS.forEach((section) => {
			const element = document.getElementById(section || "home"); // Si section est "", utiliser "home" ou un autre ID par défaut
			if (element) {
				observer.observe(element);
			}
		});

		// Nettoyer l'observer lors du démontage du composant
		return () => {
			SECTIONS.forEach((section) => {
				const element = document.getElementById(section || "home");
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, []);

	useEffect(() => {
		setIsShowListMenu(false);
	}, [activeNav]);

	return (
		<div className="content_fix_nav" ref={navbarRef}>
			<div className="container fix_nav">
				<div>
					<Link to="/" className="title_navbar_link">
						<h2 className="title_navbar">Jehovanie R.</h2>
					</Link>
				</div>
				<div className="content_nav_link_web nav_content_link">
					<Link to="/#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}>
						{t('navbar.home')}
					</Link>
					<Link
						to="/#about"
						onClick={() => setActiveNav("#about")}
						className={activeNav === "#about" ? "active" : ""}>
						{t('navbar.about')}
					</Link>
					<Link
						to="/#service"
						onClick={() => setActiveNav("#service")}
						className={activeNav === "#service" ? "active" : ""}>
						{t('navbar.service')}
					</Link>
					<Link
						to="/#project"
						onClick={() => setActiveNav("#project")}
						className={activeNav === "#project" ? "active" : ""}>
						{t('navbar.project')}
					</Link>
					<Link
						to="/#experience"
						onClick={() => setActiveNav("#experience")}
						className={activeNav === "#experience" ? "active" : ""}>
						{t('navbar.experience')}
					</Link>
					<Link
						to="/#contact"
						onClick={() => setActiveNav("#contact")}
						className={activeNav === "#contact" ? "active" : ""}>
						{t('navbar.contact')}
					</Link>
				</div>
				<div className="content_drop_lang_and_menu">
					{/* Sélecteur compact : les deux langues sont visibles, un clic suffit
					    et l'état courant se lit sans ouvrir quoi que ce soit. */}
					<div className="lang_switch" role="group" aria-label={t("navbar.language")}>
						{LANGUAGES.map((code) => (
							<button
								key={code}
								type="button"
								lang={code}
								className={`lang_switch__option${lang === code ? " active" : ""}`}
								aria-pressed={lang === code}
								onClick={() => changeLanguage(code)}>
								{code.toUpperCase()}
							</button>
						))}
					</div>

					{/* Le CV est l'action la plus recherchée : accessible depuis toutes
					    les sections, sans ouvrir le menu ni descendre dans la page. */}
					<a href={CV} download className="navbar__cv" title={t("cv.download")}>
						<GoDownload aria-hidden="true" />
						<span>{t("cv.short")}</span>
					</a>

					<div className="content_menu_icon">
						<IconMenuMobile
							isOpen={isShowListMenu}
							toggleMenu={setIsShowListMenu}
							label={isShowListMenu ? t("navbar.closeMenu") : t("navbar.openMenu")}
						/>
					</div>
				</div>
			</div>
			<div
				id={MOBILE_MENU_ID}
				className="nav_content_link content_nav_link_mobile"
				style={{ display: isShowListMenu ? "block" : "none" }}>
				<div className="container">
					<Link to="/#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}>
					{t('navbar.home')}
				</Link>
				<Link
					to="/#about"
					onClick={() => setActiveNav("#about")}
					className={activeNav === "#about" ? "active" : ""}>
					{t('navbar.about')}
				</Link>
				<Link
					to="/#service"
					onClick={() => setActiveNav("#service")}
					className={activeNav === "#service" ? "active" : ""}>
					{t('navbar.service')}
				</Link>
				<Link
					to="/#project"
					onClick={() => setActiveNav("#project")}
					className={activeNav === "#project" ? "active" : ""}>
					{t('navbar.project')}
				</Link>
				<Link
					to="/#experience"
					onClick={() => setActiveNav("#experience")}
					className={activeNav === "#experience" ? "active" : ""}>
					{t('navbar.experience')}
				</Link>
				<Link
					to="/#contact"
					onClick={() => setActiveNav("#contact")}
					className={activeNav === "#contact" ? "active" : ""}>
					{t('navbar.contact')}
				</Link>
			</div>
		</div>
	</div>
);
};

export default Navbar;

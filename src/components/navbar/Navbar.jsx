import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";

import "./navbar.css";
import { useEffect, useState } from "react";

const IconMenuMobile = ({ isOpen, toggleMenu }) => {
	return isOpen ? (
		<RiMenu3Fill className="menu_icon" onClick={() => toggleMenu(false)} />
	) : (
		<RiMenu2Line className="menu_icon" onClick={() => toggleMenu(true)} />
	);
};

const Navbar = () => {
	const [activeNav, setActiveNav] = useState("#");
	const [isShowListMenu, setIsShowListMenu] = useState(false);
	const [lang, setLang] = useState("FR");

	// Liste des sections correspondant aux liens
	const sections = ["home", "about", "service", "experience", "project", "contact"]; // "" correspond à la section "#"

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
		sections.forEach((section) => {
			const element = document.getElementById(section || "home"); // Si section est "", utiliser "home" ou un autre ID par défaut
			if (element) {
				observer.observe(element);
			}
		});

		// Nettoyer l'observer lors du démontage du composant
		return () => {
			sections.forEach((section) => {
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
		<div className="content_fix_nav">
			<div className="container fix_nav">
				<div>
					<h2 className="title_navbar">Jehovanie R.</h2>
				</div>
				<div className="content_nav_link_web nav_content_link">
					<a href="#home" onClick={() => setActiveNav("#")} className={activeNav === "#home" ? "active" : ""}>
						Acceuil
					</a>
					<a
						href="#about"
						onClick={() => setActiveNav("#about")}
						className={activeNav === "#about" ? "active" : ""}>
						A propos
					</a>
					<a
						href="#service"
						onClick={() => setActiveNav("#service")}
						className={activeNav === "#service" ? "active" : ""}>
						Services
					</a>
					<a
						href="#experience"
						onClick={() => setActiveNav("#experience")}
						className={activeNav === "#experience" ? "active" : ""}>
						Compétences
					</a>
					<a
						href="#project"
						onClick={() => setActiveNav("#project")}
						className={activeNav === "#project" ? "active" : ""}>
						Expérience
					</a>
					<a
						href="#contact"
						onClick={() => setActiveNav("#contact")}
						className={activeNav === "#contact" ? "active" : ""}>
						Contact
					</a>
				</div>
				<div className="content_drop_lang_and_menu">
					<div className="dropdown">
						<button className="dropbtn">
							<GrLanguage />
							<span className="language">Français</span>
							<IoIosArrowDown />
						</button>
						<div class="dropdown-content">
							<div className="lang" onClick={() => setLang("FR")}>
								<IoCheckmarkSharp className={lang == "FR" ? "" : "lang_not_active"} />
								Français
							</div>
							<div className="lang not_active" onClick={() => setLang("AN")}>
								<IoCheckmarkSharp className={lang == "AN" ? "" : "lang_not_active"} />
								English
							</div>
						</div>
					</div>
					<div className="content_menu_icon">
						<IconMenuMobile isOpen={isShowListMenu} toggleMenu={setIsShowListMenu} />
					</div>
				</div>
			</div>
			<div
				className="nav_content_link content_nav_link_mobile"
				style={{ display: isShowListMenu ? "block" : "none" }}>
				<div className="container">
					<a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
						Acceuil
					</a>
					<a
						href="#about"
						onClick={() => setActiveNav("#about")}
						className={activeNav === "#about" ? "active" : ""}>
						A propos
					</a>
					<a
						href="#service"
						onClick={() => setActiveNav("#service")}
						className={activeNav === "#service" ? "active" : ""}>
						Services
					</a>
					<a
						href="#experience"
						onClick={() => setActiveNav("#experience")}
						className={activeNav === "#experience" ? "active" : ""}>
						Compétences
					</a>
					<a
						href="#project"
						onClick={() => setActiveNav("#project")}
						className={activeNav === "#project" ? "active" : ""}>
						Expérience
					</a>
					<a
						href="#contact"
						onClick={() => setActiveNav("#contact")}
						className={activeNav === "#contact" ? "active" : ""}>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

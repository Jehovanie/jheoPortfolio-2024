import "./project.css";
import PropTypes from "prop-types";

import IMG1 from "./../../assets/image/ticketUp.png";
import IMG2 from "./../../assets/image/mySchool.png";
import IMG3 from "./../../assets/image/e-bookShare.png";

const projects = [
	{
		id: 1,
		image: IMG1,
		title: "TicketUp: Gestion et Plateforme pour vendre des ticket d'une événement.",
		description: `TicketUp est une plateforme complète de gestion d'événements et de vente de tickets,
		composée de trois modules interconnectés : Application mobile, Centre d'administration
		web (Organisateurs & Admins) et API centrale (Backend sécurisé)`,
		github: "https://github.com/Jehovanie/TicketUp-Api/tree/develop",
		live_demo: "",
	},
	{
		id: 2,
		image: IMG2,
		title: "MySchool: Application de gestion scolaire complète.",
		description: `La plateforme à pour objectif de rendre facile le système d'éducation lycéenne.Faciliter
		la communication, la gestion, et améliorer la façon de transmettre la connaissance.`,
		github: "https://gitlab.com/Jehovanie/myScholl-V-0.0.2",
		live_demo: "",
	},
	{
		id: 3,
		image: IMG3,
		title: "E-bookShare: Un moyen de partage mon e-book préferer à tous le monde.",
		description: `e-BookShare est une application web et mobile qui facilite le partage, la découverte et
		l'emprunt de livres numériques, en encourageant la lecture sociale et l'entraide entre
		passionnés.`,
		github: "https://github.com/Jehovanie/E-bookShare-Front.git",
		live_demo: "",
	},
];

const ProjectCard = ({ image, title, description, github, live_demo }) => {
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
						Github
					</a>
					{live_demo ?? (
						<a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
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
};

const Project = () => {
	return (
		<section id="project" className="experience_content_service">
			<h5>Mes travaux récents...</h5>
			<h2>Expérience professionnelle</h2>

			<div className="container project__container">
				{projects.map(item => (
					<ProjectCard
						key={item.id}
						{...item}
					/>
				))}
			</div>
		</section>
	);
};

export default Project;

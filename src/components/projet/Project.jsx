import "./project.css";

import IMG1 from "./../../assets/image/ticketUp.png";
import IMG2 from "./../../assets/image/mySchool.png";
import IMG3 from "./../../assets/image/e-bookShare.png";

const Project = () => {
	return (
		<section id="project">
			<h5> My Recent Work</h5>
			<h2> Web Site </h2>

			<div className="container project__container">
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG1} alt="project image" />
					</div>
					<div>
						<h3> TicketUp: Gestion et Plateforme pour vendre des ticket d'une événement. </h3>
						<p>
							TicketUp est une plateforme complète de gestion d'événements et de vente de tickets,
							composée de trois modules interconnectés : Application mobile, Centre d'administration web
							(Organisateurs & Admins) et API centrale (Backend sécurisé){" "}
						</p>
					</div>
					<div className="project__item-cta">
						<a
							href="https://github.com/Jehovanie/TicketUp-Api/tree/develop"
							className="btn"
							target="_blank">
							Github
						</a>
						{/* <a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
						</a> */}
					</div>
				</article>
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG2} alt="project image" />
					</div>
					<div>
						<h3> MySchool: Application de gestion scolaire complète. </h3>
						<p>
							La plateforme à pour objectif de rendre facile le système d'éducation lycéenne.Faciliter la
							communication, la gestion, et améliorer la façon de transmettre la connaissance.
						</p>
					</div>

					<div className="project__item-cta">
						<a href="https://gitlab.com/Jehovanie/myScholl-V-0.0.2" className="btn" target="_blank">
							Github
						</a>
						{/* <a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
						</a> */}
					</div>
				</article>
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG3} alt="project image" />
					</div>
					<div>
						<h3>E-bookShare</h3>
						<p>
							e-BookShare est une application mobile et web conçue pour permettre aux passionnés de
							lecture de partager, découvrir, emprunter ou proposer des livres numériques en toute
							simplicité. Plus qu'une bibliothèque numérique, e-BookShare favorise la lecture sociale, la
							découverte participative et l'entraide entre lecteurs.
						</p>
					</div>

					<div className="project__item-cta">
						<a href=" https://github.com/Jehovanie/E-bookShare-Front.git" className="btn" target="_blank">
							Github
						</a>
						{/* <a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
						</a> */}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Project;

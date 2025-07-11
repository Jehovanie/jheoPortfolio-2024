import "./project.css";

import IMG1 from "./../../assets/image/ticketUp.png";
import IMG2 from "./../../assets/image/mySchool.png";
import IMG3 from "./../../assets/image/e-bookShare.png";

const Project = () => {
	return (
		<section id="project">
			<h5>Mes travaux récents...</h5>
			<h2>Expérience professionnelle</h2>

			<div className="container project__container">
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG1} alt="project image" />
					</div>
					<div className="content_project_description">
						<div>
							<h5 className="project_title">
								{" "}
								TicketUp: Gestion et Plateforme pour vendre des ticket d'une événement.{" "}
							</h5>
							<p className="project_description">
								TicketUp est une plateforme complète de gestion d'événements et de vente de tickets,
								composée de trois modules interconnectés : Application mobile, Centre d'administration
								web (Organisateurs & Admins) et API centrale (Backend sécurisé){" "}
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
					</div>
				</article>
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG2} alt="project image" />
					</div>
					<div className="content_project_description">
						<div>
							<h5 className="project_title"> MySchool: Application de gestion scolaire complète. </h5>
							<p className="project_description">
								La plateforme à pour objectif de rendre facile le système d'éducation lycéenne.Faciliter
								la communication, la gestion, et améliorer la façon de transmettre la connaissance.
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
					</div>
				</article>
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG3} alt="project image" />
					</div>
					<div className="content_project_description">
						<div>
							<h5 className="project_title">
								E-bookShare: Un moyen de partage mon e-book préferer à tous le monde.
							</h5>
							<p className="project_description">
								e-BookShare est une application web et mobile qui facilite le partage, la découverte et
								l’emprunt de livres numériques, en encourageant la lecture sociale et l’entraide entre
								passionnés.
							</p>
						</div>

						<div className="project__item-cta">
							<a
								href=" https://github.com/Jehovanie/E-bookShare-Front.git"
								className="btn"
								target="_blank">
								Github
							</a>
							{/* <a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
						</a> */}
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Project;

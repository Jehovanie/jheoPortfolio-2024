import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "./../../assets/image/developpeur.png";

import "./about.css";

const About = () => {
	return (
		<section id="about">
			<h5>Apprendre à connaître...</h5>
			<h2>A propos de moi</h2>

			<div className="container about__container">
				<div className="about__me show_tablette">
					<div className="about__me-image">
						<img src={ME} alt="About image" />
					</div>
				</div>

				<div className="about__content">
					<div className="content_about_image_laptop">
						<div className="about__me show_laptop">
							<div className="about__me-image">
								<img src={ME} alt="About image" />
							</div>
						</div>
						<div className="content_text_desc_laptop">
							<p>
								Développeur web et mobile full-stack, toujours en quête d'apprentissage et d'élargissement de mes compétences.
								Enthousiaste et passionné par le monde du développement,
								je suis un développeur qui s'immerge avec ferveur dans les défis et les opportunités offerts par le domaine de l'informatique.
								Ma passion pour la programmation va bien au-delà des simples compétences techniques,c'est une véritable expression de ma créativité et de mon engagement en faveur de l'innovation...
							</p>
						</div>
					</div>
					<div className="content_about_client_laptop">
						<div className="about__cards">
							<article className="about__card">
								<FaAward className="about__icon" />
								<h6> Experience </h6>
								<small> +3ans  </small>
							</article>
							<article className="about__card">
								<FiUsers className="about__icon" />
								<h6> Clients </h6>
								<small>Société,Entreprise </small>
							</article>
							<article className="about__card">
								<VscFolderLibrary className="about__icon" />
								<h6> Projets </h6>
								<small>+5 Finis</small>
							</article>
						</div>
						<div className="content_text_copy_writing_laptop">
							<p>
								Si vous recherchez un développeur web créatif et passionné, capable de travailler en équipe pour
								créer des solutions sur mesure, n'hésitez pas à me contacter. Je suis toujours à la recherche de
								nouveaux défis et j'ai hâte de collaborer avec vous pour réaliser vos projets web les plus
								ambitieux.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

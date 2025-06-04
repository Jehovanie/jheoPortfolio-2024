import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "./../../assets/image/developpeur.png";

import "./about.css";

const About = () => {
	return (
		<section id="about">
			<h5> Get to Know</h5>
			<h2> About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5> Experience </h5>
							<small> +3ans  </small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5> Clients </h5>
							<small>Société,Entreprise </small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5> Projets </h5>
							<small> +5 Términer </small>
						</article>
					</div>
					<p>
						Si vous recherchez un développeur web créatif et passionné, capable de travailler en équipe pour
						créer des solutions sur mesure, n'hésitez pas à me contacter. Je suis toujours à la recherche de
						nouveaux défis et j'ai hâte de collaborer avec vous pour réaliser vos projets web les plus
						ambitieux.
					</p>

					<a href="#contact" className="btn btn-primary btn_lets_talk_about">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;

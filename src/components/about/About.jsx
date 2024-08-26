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
							<small> 2+ Years Working </small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5> Clients </h5>
							<small>20+ (society/client) </small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5> Projects </h5>
							<small> 10+ Completed </small>
						</article>
					</div>
					<p>
						If you are looking for a creative and passionate web developer who can work in a team to create
						tailor-made solutions, do not hesitate to contact me. I'm always looking for new challenges and
						I look forward to working with you to realize your most ambitious web projects.
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

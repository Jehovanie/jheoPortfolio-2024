import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
	return (
		<section id="experience">
			<h5> What Skills I have </h5>
			<h2> My Experience </h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div>
						<div className="experience__content">
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4> React</h4>
									<small className="text-light"> Intermediaire</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>Angular</h4>
									<small className="text-light"> Intermediaire</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>TypeScript</h4>
									<small className="text-light">Intermediaire</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>Javascript</h4>
									<small className="text-light">Intermediaire</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>HTML</h4>
									<small className="text-light"> Avancer</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>CSS/SAAS</h4>
									<small className="text-light"> Avancer</small>
								</div>
							</article>
						</div>
					</div>
				</div>

				<div className="experience__frontend">
					<h3>Backend Development</h3>
					<div>
						<div className="experience__content">
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>NodeJS</h4>
									<small className="text-light"> Intermediaire</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>Express</h4>
									<small className="text-light"> Intermediaire</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>PHP</h4>
									<small className="text-light"> Avancer</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>Symfony</h4>
									<small className="text-light"> Avancer</small>
								</div>
							</article>
						</div>
						<div>
							<h3> Data Base</h3>
						</div>
						<div className="experience__content">
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>MySql</h4>
									<small className="text-light"> Avancer</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon " />
								<div>
									<h4>MongoDB</h4>
									<small className="text-light"> Intermediaire</small>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;

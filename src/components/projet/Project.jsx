import "./project.css";

import IMG1 from "./../../assets/image/model-1.jpg";
import IMG2 from "./../../assets/image/model-2.jpg";
import IMG3 from "./../../assets/image/model-3.jpg";

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
					<h3> This is a project item title </h3>
					<div className="project__item-cta">
						<a href="https://github.com" className="btn" target="_blank">
							Github
						</a>
						<a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
						</a>
					</div>
				</article>
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG2} alt="project image" />
					</div>
					<h3> This is a project item title </h3>

					<div className="project__item-cta">
						<a href="https://github.com" className="btn" target="_blank">
							Github
						</a>
						<a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
						</a>
					</div>
				</article>
				<article className="project__item">
					<div className="project__item-image">
						<img src={IMG3} alt="project image" />
					</div>
					<h3> This is a project item title </h3>

					<div className="project__item-cta">
						<a href="https://github.com" className="btn" target="_blank">
							Github
						</a>
						<a href="https://linkedin.com" className="btn btn-primary" target="_blank" rel="noreferrer">
							Live Demo
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Project;

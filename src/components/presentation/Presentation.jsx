// import DEV from "./../../assets/image/image-5.jpg";
import DEV from "./../../assets/image/j.png";
import CTA from "./macro/cta/CTA";
import HeaderSocial from "./macro/social/HeaderSocial";

import "./presentation.css";

const Presentation = () => {
	return (
		<header id="home">
			<div className="container header__container">
				<div className="left__side">
					<div>
						<h5 className="text"> Bonjour👋, Moi c'est Jehovanie, </h5>
						<div className="content__name">
							<h2 className="text">Developpeur FullStack</h2>
							<p>
								Diplômé en Mathématiques et Informatique | Expertise en PHP, JavaScript & TypeScript
							</p>
						</div>
						<div className="content_cta_left_side">
							<CTA />
							<HeaderSocial />
						</div>
					</div>
				</div>

				<div className="right__side">
					<div className="dev">
						<img src={DEV} alt="Image 1" />
					</div>
					<div className="content_cta_right_side">
						<CTA />
						<HeaderSocial />
					</div>
				</div>

				<a href="#contact" className="scroll__down ">
					{">>>"} scrool down {">>>"}{" "}
				</a>
			</div>
		</header>
	);
};

export default Presentation;

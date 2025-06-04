// import DEV from "./../../assets/image/image-5.jpg";
import DEV from "./../../assets/image/j.png";
import CTA from "./macro/cta/CTA";
import HeaderSocial from "./macro/social/HeaderSocial";

import "./presentation.css";

const Presentation = () => {
	return (
		<header>
			<div className="container header__container">
				<div className="left__side">
					<h5> Hi✌️, I'm</h5>
					<div className="content__name">
						<h1>Jehovanie </h1>
						<h1>RAMANDRIJOEL</h1>
					</div>

					<h5 className="text-light">FullStack Developpeur 🧑‍💻</h5>
					<div className="content_cta_left_side">
						<CTA />
						<HeaderSocial />
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

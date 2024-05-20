import DEV from "./../../assets/image/image-5.jpg";
import CTA from "./macro/cta/CTA";
import HeaderSocial from "./macro/social/HeaderSocial";

import "./presentation.css";

const Presentation = () => {
	return (
		<header>
			<div className="container header__container">
				<div className="left__side">
					<h5> Hello👌, I'm</h5>
					<div className="content__name">
						<h1 className="margin_rigth_1">Jehovanie </h1>
						<h1>RAMANDRIJOEL</h1>
					</div>

					<h5 className="text-light">FullStack Developpeur 🧑‍💻</h5>

					<CTA />
					<HeaderSocial />
				</div>

				<div className="right__side">
					<div className="dev">
						<img src={DEV} alt="Image 1" />
					</div>
				</div>

				<a href="#contact" className="scroll__down">
					{">>>>>>"} Scroll Down {">>>>>"}{" "}
				</a>
			</div>
		</header>
	);
};

export default Presentation;

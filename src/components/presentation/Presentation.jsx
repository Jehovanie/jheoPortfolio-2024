// import DEV from "./../../assets/image/image-5.jpg";
import DEV from "./../../assets/image/j.png";
import CTA from "./macro/cta/CTA";
import HeaderSocial from "./macro/social/HeaderSocial";
import { useTranslation } from "react-i18next";

import "./presentation.css";

const Presentation = () => {
	const { t } = useTranslation();
	
	return (
		<header id="home">
			<div className="container header__container">
				<div className="left__side">
					<div>
						<h5 className="text">{t('presentation.greeting')}</h5>
						<div className="content__name">
							<h2 className="text">{t('presentation.title')}</h2>
							<p>
								{t('presentation.subtitle')}
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
					{">>>"} {t('presentation.scrollDown')} {">>>"}{" "}
				</a>
			</div>
		</header>
	);
};

export default Presentation;

// import DEV from "./../../assets/image/image-5.jpg";
import DEV from "./../../assets/image/j.png";
import CTA from "./macro/cta/CTA";
import HeaderSocial from "./macro/social/HeaderSocial";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./presentation.css";

const Presentation = () => {
	const { t } = useTranslation();
	const leftSideRef = useRef(null);
	const rightSideRef = useRef(null);
	const scrollDownRef = useRef(null);
	
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
		
		// Animation d'entrée
		tl.fromTo(
			leftSideRef.current.children,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.2 }
		)
		.fromTo(
			rightSideRef.current,
			{ opacity: 0, x: 100, scale: 0.8 },
			{ opacity: 1, x: 0, scale: 1, duration: 1 },
			"-=0.5"
		)
		.fromTo(
			scrollDownRef.current,
			{ opacity: 0, y: -20 },
			{ opacity: 1, y: 0, duration: 0.8, repeat: -1, yoyo: true },
			"-=0.3"
		);
	}, []);
	
	return (
		<header id="home">
			<div className="container header__container">
				<div className="left__side" ref={leftSideRef}>
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

				<div className="right__side" ref={rightSideRef}>
					<div className="dev">
						<img src={DEV} alt="Image 1" />
					</div>
					<div className="content_cta_right_side">
						<CTA />
						<HeaderSocial />
					</div>
				</div>

				<a href="#contact" className="scroll__down" ref={scrollDownRef}>
					{">>>"} {t('presentation.scrollDown')} {">>>"}{" "}
				</a>
			</div>
		</header>
	);
};

export default Presentation;

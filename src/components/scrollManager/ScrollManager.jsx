import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restaure la position de scroll à chaque changement de route :
 * - sans ancre, on repart en haut de la nouvelle page ;
 * - avec une ancre (`/#project` en revenant d'une fiche projet), on vise la
 *   section correspondante. Les visuels de la home se chargent en différé, d'où
 *   la seconde tentative après un court délai.
 */
const ScrollManager = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			return undefined;
		}

		const target = () => document.getElementById(hash.slice(1));
		const scroll = () => target()?.scrollIntoView({ behavior: "auto", block: "start" });

		const frame = window.requestAnimationFrame(scroll);
		const retry = window.setTimeout(scroll, 300);

		return () => {
			window.cancelAnimationFrame(frame);
			window.clearTimeout(retry);
		};
	}, [pathname, hash]);

	return null;
};

export default ScrollManager;

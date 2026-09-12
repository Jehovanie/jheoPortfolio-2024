import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./skillsorbit.css";

/* Rayon de l'orbite, en % du conteneur (qui est carré). */
const RADIUS = 38;

/* Les nœuds sont répartis tous les 45°, en partant du haut (-90°). */
const NODES = [
	{ id: "web", angle: -90 },
	{ id: "ios", angle: -45 },
	{ id: "db", angle: 0 },
	{ id: "api", angle: 45 },
	{ id: "cloud", angle: 90 },
	{ id: "security", angle: 135 },
	{ id: "uiux", angle: 180 },
	{ id: "android", angle: -135 },
];

const getPosition = (angle) => {
	const rad = (angle * Math.PI) / 180;
	return {
		x: 50 + RADIUS * Math.cos(rad),
		y: 50 + RADIUS * Math.sin(rad),
	};
};

const SkillsOrbit = () => {
	const { t } = useTranslation();

	return (
		<div className="skills-orbit">
			<div className="skills-orbit__stage" role="img" aria-label={t("about.orbit.aria")}>
				{/* Les traits sont dessinés en dessous : les pastilles opaques masquent leurs extrémités. */}
				<svg className="skills-orbit__links" viewBox="0 0 100 100" aria-hidden="true">
					{NODES.map((node) => {
						const { x, y } = getPosition(node.angle);
						return (
							<line
								key={node.id}
								className="skills-orbit__link"
								x1="50"
								y1="50"
								x2={x}
								y2={y}
							/>
						);
					})}
				</svg>

				<div className="skills-orbit__core">
					<FaLaptopCode className="skills-orbit__core-icon" />
					<FaMobileAlt className="skills-orbit__core-icon" />
				</div>

				{NODES.map((node) => {
					const { x, y } = getPosition(node.angle);
					return (
						<span
							key={node.id}
							className="skills-orbit__node"
							style={{ left: `${x}%`, top: `${y}%` }}
						>
							{t(`about.orbit.${node.id}`)}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsOrbit;

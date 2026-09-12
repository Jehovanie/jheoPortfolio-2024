import { useTranslation } from "react-i18next";
import { useRef } from "react";
import PropTypes from "prop-types";
import { useScrollAnimationChildren } from "../../hooks/useScrollAnimation";
import "./experience.css";

import {
	angular,
	graphql,
	javascript,
	laravel,
	mongodb,
	mysql,
	nextjs,
	nodejs,
	php,
	postgresql,
	react,
	reactNative,
	symfony,
	typescript,
	docker,
	gitlab,
	github
} from "@/constant/svg";

/* Les technos sont regroupées par usage : on lit la stack d'un coup d'œil
   au lieu de survoler chaque logo pour découvrir son nom. */
const techGroups = [
	{
		id: "languages",
		items: [
			{ name: "PHP", icon: php },
			{ name: "Javascript", icon: javascript },
			{ name: "Typescript", icon: typescript },
		],
	},
	{
		id: "frontend",
		items: [
			{ name: "React", icon: react },
			{ name: "React Native", icon: reactNative },
			{ name: "NextJs", icon: nextjs },
			{ name: "Angular", icon: angular },
		],
	},
	{
		id: "backend",
		items: [
			{ name: "Symfony", icon: symfony },
			{ name: "Laravel", icon: laravel },
			{ name: "Node", icon: nodejs },
			{ name: "GraphQL", icon: graphql },
		],
	},
	{
		id: "database",
		items: [
			{ name: "MySql", icon: mysql },
			{ name: "PostgreSql", icon: postgresql },
			{ name: "MongoDB", icon: mongodb },
		],
	},
	{
		id: "devops",
		items: [
			{ name: "Docker", icon: docker },
			{ name: "GitLab CI/CD", icon: gitlab },
			{ name: "GitHub Action", icon: github },
		],
	},
];

const TechGroup = ({ group }) => {
	const { t } = useTranslation();
	const gridRef = useRef(null);

	useScrollAnimationChildren(gridRef, {
		from: { opacity: 0, y: 20 },
		to: { opacity: 1, y: 0 },
		stagger: 0.06,
		duration: 0.5,
	});

	return (
		<div className="experience__group">
			<h3 className="experience__group-title">{t(`experience.categories.${group.id}`)}</h3>
			<ul className="experience__grid" ref={gridRef}>
				{group.items.map((tech) => (
					<li key={tech.name} className="experience__tech">
						{/* Le nom est déjà affiché juste en dessous : l'image reste décorative. */}
						<img src={tech.icon} alt="" aria-hidden="true" />
						<span>{tech.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

TechGroup.propTypes = {
	group: PropTypes.shape({
		id: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				icon: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
};

const Experience = () => {
	const { t } = useTranslation();

	return (
		<section id="experience" className="experience_content_service">
			<h5>{t('experience.subtitle')}</h5>
			<h2>{t('experience.title')}</h2>

			<div className="container experience__container">
				{techGroups.map((group) => (
					<TechGroup key={group.id} group={group} />
				))}
			</div>
		</section>
	);
};

export default Experience;

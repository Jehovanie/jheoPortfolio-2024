/**
 * Source unique des projets perso.
 *
 * Partagé par la liste (`components/projet/Project.jsx`) et la page de détail
 * (`Page/projectDetail/ProjectDetail.jsx`) : toute évolution des données se
 * fait ici, jamais dans un composant.
 */
import {
	angular,
	docker,
	express,
	javascript,
	laravel,
	mongodb,
	mysql,
	nestjs,
	nextjs,
	nodejs,
	php,
	postgresql,
	react,
	reactNative,
	redux,
	symfony,
	tailwind,
	typescript,
} from "@/constant/svg";

import IMG1 from "../assets/image/ticketUp.png";
import IMG2 from "../assets/image/mySchool.png";
import IMG3 from "../assets/image/e-bookShare.png";

/** Icônes de stack : clé = nom de la techno en minuscules. */
export const TECH_ICONS = {
	"react native": reactNative,
	react: react,
	angular: angular,
	typescript: typescript,
	javascript: javascript,
	symfony: symfony,
	laravel: laravel,
	php: php,
	nestjs: nestjs,
	nodejs: nodejs,
	express: express,
	nextjs: nextjs,
	redux: redux,
	tailwind: tailwind,
	postgresql: postgresql,
	mysql: mysql,
	mongodb: mongodb,
	docker: docker,
};

/** Retourne l'icône associée à une techno, ou `undefined`. */
export const getTechIcon = (tech) => TECH_ICONS[tech.toLowerCase()];

/**
 * Captures de projet : un dossier par projet dans `assets/image/projects/<slug>/`.
 * Toute image déposée dans le dossier est reprise automatiquement (voir le
 * README de ce dossier). Tri alphanumérique sur le chemin => préfixer les
 * fichiers (01-, 02-, ...) pour maîtriser l'ordre de la galerie.
 */
const captureModules = import.meta.glob(
	"../assets/image/projects/*/*.{png,jpg,jpeg,webp,avif}",
	{ eager: true, import: "default" }
);

const capturesBySlug = Object.keys(captureModules)
	.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
	.reduce((acc, path) => {
		const slug = path.split("/").slice(-2)[0];
		if (!acc[slug]) acc[slug] = [];
		acc[slug].push(captureModules[path]);
		return acc;
	}, {});

/** La couverture ouvre toujours la galerie, suivie des captures du dossier. */
const buildGallery = (slug, cover) => [cover, ...(capturesBySlug[slug] || [])];

/** Récupère un tableau de traductions (features) sans planter si la clé manque. */
const getList = (t, key) => {
	const value = t(key, { returnObjects: true, defaultValue: [] });
	return Array.isArray(value) ? value : [];
};

export const getProjects = (t) => [
	{
		id: 1,
		slug: "ticketUp",
		image: IMG1,
		images: buildGallery("ticketUp", IMG1),
		year: "2025",
		stack: [
			"React Native",
			"Angular",
			"TypeScript",
			"Symfony",
			"API Platform",
			"PostgreSQL",
			"NodeJS",
			"Mercure",
		],
		title: t("project.ticketUp.title"),
		description: t("project.ticketUp.description"),
		problem: t("project.ticketUp.problem"),
		solution: t("project.ticketUp.solution"),
		features: getList(t, "project.ticketUp.features"),
		role: t("project.ticketUp.role"),
		github: "https://github.com/Jehovanie/TicketUp-Api/tree/develop",
		live_demo: "",
	},
	{
		id: 2,
		slug: "mySchool",
		image: IMG2,
		images: buildGallery("mySchool", IMG2),
		year: "2022",
		// TODO: ajuster la stack réelle de MySchool si besoin
		stack: ["Symfony", "PHP", "JavaScript", "MySQL", "Tailwind"],
		title: t("project.mySchool.title"),
		description: t("project.mySchool.description"),
		problem: t("project.mySchool.problem"),
		solution: t("project.mySchool.solution"),
		features: getList(t, "project.mySchool.features"),
		role: t("project.mySchool.role"),
		github: "https://gitlab.com/Jehovanie/myScholl-V-0.0.2",
		live_demo: "",
	},
	{
		id: 3,
		slug: "ebookShare",
		image: IMG3,
		images: buildGallery("ebookShare", IMG3),
		year: "2023",
		// TODO: ajuster la stack réelle de E-bookShare si besoin
		stack: ["React", "Redux", "NodeJS", "Express", "MongoDB"],
		title: t("project.ebookShare.title"),
		description: t("project.ebookShare.description"),
		problem: t("project.ebookShare.problem"),
		solution: t("project.ebookShare.solution"),
		features: getList(t, "project.ebookShare.features"),
		role: t("project.ebookShare.role"),
		github: "https://github.com/Jehovanie/E-bookShare",
		live_demo: "https://e-bookshare.onrender.com",
	},
];

/** URL canonique de la page de détail d'un projet. */
export const projectPath = (slug) => `/projets/${slug}`;

/**
 * Retrouve un projet par son slug et ses voisins, pour la navigation
 * précédent / suivant en bas de la page de détail.
 */
export const findProject = (projects, slug) => {
	const index = projects.findIndex((p) => p.slug === slug);
	if (index === -1) return { project: null, previous: null, next: null };
	const total = projects.length;
	const previous = total > 1 ? projects[(index - 1 + total) % total] : null;
	const next = total > 1 ? projects[(index + 1) % total] : null;
	return {
		project: projects[index],
		// À deux projets, précédent et suivant désignent la même fiche.
		previous: previous === next ? null : previous,
		next,
	};
};

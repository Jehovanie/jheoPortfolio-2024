import "./experience.css";

import {
	angular,
	graphql,
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
	symfony,
	typescript,
	docker,
	gitlab,
	github
} from "@/constant/svg";

const techStack = [
	{ name: "Symfony", icon: symfony },
	{ name: "Laravel", icon: laravel },
	{ name: "PHP", icon: php },
	{ name: "Docker", icon: docker },
	{ name: "Javascript", icon: javascript },
	{ name: "MySql", icon: mysql },
	{ name: "PostgreSql", icon: postgresql },
	{ name: "MongoDB", icon: mongodb },
	{ name: "Typescript", icon: typescript },
	{ name: "React", icon: react },
	{ name: "React Native", icon: reactNative },
	{ name: "Angular", icon: angular },
	{ name: "GraphQL", icon: graphql },
	{ name: "Node", icon: nodejs },
	{ name: "Nest JS", icon: nestjs },
	{ name: "NextJs", icon: nextjs },
	{ name: "GitLab CI/CD", icon: gitlab },
	{ name: "GitHub Action", icon: github },
];

const Experience = () => {
	return (
		<section id="experience">
			<h5>Les compétences que j'ai ...</h5>
			<h2>Mes compétences et technologies</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<div className="experience__content">
						{techStack.map((tech) => (
							<div key={tech.name} className="content_image_tech">
								<img src={tech.icon} alt={tech.name} className="image_tech" />
								<span className="tooltip">{tech.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;

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
	{ name: "PHP", icon: php },
	{ name: "Javascript", icon: javascript },
	{ name: "Typescript", icon: typescript },
	{ name: "MySql", icon: mysql },
	{ name: "PostgreSql", icon: postgresql },
	{ name: "MongoDB", icon: mongodb },
	{ name: "Symfony", icon: symfony },
	{ name: "React", icon: react },
	{ name: "React Native", icon: reactNative },
	{ name: "Angular", icon: angular },
	{ name: "Node", icon: nodejs },
	{ name: "Docker", icon: docker },
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

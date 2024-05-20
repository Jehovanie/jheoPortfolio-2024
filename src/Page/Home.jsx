import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";

import Navbar from "../components/navbar/Navbar";
import Presentation from "../components/presentation/Presentation";
import Project from "../components/projet/Project";

const Home = () => {
	return (
		<div class="home_page">
			<div className="content_fix_nav">
				<Navbar />
			</div>
			<div className="body_home_page">
				<div className="content_presentation">
					<Presentation />
				</div>
				<div className="content_about">
					<About />
				</div>
				<div className="content_experience">
					<Experience />
				</div>
				<div className="content_project">
					<Project />
				</div>
				<div className="content_contact">
					<Contact />
				</div>
			</div>
		</div>
	);
};

export default Home;

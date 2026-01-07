import About from "../components/about/About";
import Ending from "../components/ending/Ending";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";

import Navbar from "../components/navbar/Navbar";
import Presentation from "../components/presentation/Presentation";
import Project from "../components/projet/Project";
import Service from "../components/service/Service";

const Home = () => {
	return (
		<div className="home_page">
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
				<div className="content_service">
					<Service />
				</div>
				<div className="content_experience">
					<Experience />
				</div>
				<div className="content_project">
					<Project />
				</div>

				<div className="content_ending">
					<Ending />
				</div>
				<div className="content_footer">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;

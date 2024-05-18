import Navbar from "../components/navbar/Navbar";
import Presentation from "../components/presentation/Presentation";

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
			</div>
		</div>
	);
};

export default Home;

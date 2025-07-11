import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { SiPolymerproject } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";


import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<div className="fix_nav">
			<a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
				<AiOutlineHome />
			</a>
			<a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
				<AiOutlineUser />
			</a>
			<a href="#service" onClick={() => setActiveNav("#service")} className={activeNav === "#service" ? "active" : ""}>
				<VscWorkspaceTrusted />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<SiPolymerproject />
			</a>
			<a
				href="#project"
				onClick={() => setActiveNav("#project")}
				className={activeNav === "#project" ? "active" : ""}>
				<GrProjects />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}>
				<BiMessageSquareDetail />
			</a>
		</div>
	);
};

export default Navbar;

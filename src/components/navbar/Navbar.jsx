import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { SiPolymerproject } from "react-icons/si";

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
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<BiBook />
			</a>
			<a href="#stack" onClick={() => setActiveNav("#stack")} className={activeNav === "#stack" ? "active" : ""}>
				<SiPolymerproject />
			</a>
			<a
				href="#projet"
				onClick={() => setActiveNav("#projet")}
				className={activeNav === "#projet" ? "active" : ""}>
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

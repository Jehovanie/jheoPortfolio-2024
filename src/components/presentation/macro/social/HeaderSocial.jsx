import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const HeaderSocial = () => {
	return (
		<div className="header__socials">
			<a href="https://linkedin.com/in/jehovanie-ramandrijoel-17063b201" target="_blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com/Jehovanie" target="_blank">
				<FaGithub />
			</a>
			<a href="mailto:jehovanieram@gmail.com">
				<SiGmail />
			</a>
			<a href="https://wa.me/261343861246" target="_blank">
				<IoLogoWhatsapp />
			</a>
		</div>
	);
};

export default HeaderSocial;

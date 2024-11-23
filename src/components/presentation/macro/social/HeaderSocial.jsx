import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const HeaderSocial = () => {
	return (
		<div className="header__socials">
			<a href="https://linkedin.com">
				<BsLinkedin />
			</a>
			<a href="https://github.com">
				<FaGithub />
			</a>
			<a href="https://dribbble.com">
				<SiGmail />
			</a>
			<a href="https://dribbble.com">
				<IoLogoWhatsapp />
			</a>
		</div>
	);
};

export default HeaderSocial;

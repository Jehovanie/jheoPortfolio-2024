import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io5";
import { BsDiscord } from "react-icons/bs";
import { FaSlack } from "react-icons/fa6";
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
				<FaFacebook />
			</a>
			<a href="https://dribbble.com">
				<IoLogoSkype />
			</a>
			<a href="https://dribbble.com">
				<IoLogoWhatsapp />
			</a>
			<a href="https://dribbble.com">
				<BsDiscord />
			</a>
			<a href="https://dribbble.com">
				<FaSlack />
			</a>
		</div>
	);
};

export default HeaderSocial;

import { MdOutlineEmail } from "react-icons/md";
import BtnCv from "../presentation/macro/btnCV/BtnCv";
import "./ending.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Ending = () => {
	let year = new Date().getFullYear();
	return (
		<section className="ending_container">
			<h1 className="ending_title">Merci pour votre visite</h1>
			<div className="content_load_cv">
				<BtnCv />
			</div>
			<div className="ending_text">
				<p className="title_joining">on vous souhaite de me joindre sur ...</p>
				<div className="content_social_ending">
					<article className="contact__option_ending">
						<div className="contact_option_icon_name">
							<MdOutlineEmail className="contact__option-icon" />
							<h4>Email</h4>
						</div>
					</article>

					<article className="contact__option_ending">
						<div className="contact_option_icon_name">
							<BsWhatsapp className="contact__option-icon" />
							<h4>WhatsApp</h4>
						</div>
					</article>

					<article className="contact__option_ending">
						<div className="contact_option_icon_name">
							<FaDiscord className="contact__option-icon" />
							<h4>Discord</h4>
						</div>
					</article>
					<article className="contact__option_ending">
						<div className="contact_option_icon_name">
							<FaLinkedinIn className="contact__option-icon" />
							<h4>LinkedIn</h4>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Ending;

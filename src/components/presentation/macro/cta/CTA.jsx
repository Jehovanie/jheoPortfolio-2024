import CV from "./../../../../assets/pdf/CV-Jehovanie-RAMANDRIJOEL.pdf";
import { GoDownload } from "react-icons/go";
import { BsChat } from "react-icons/bs";


const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} download className="btn cta_action">
				<GoDownload />
				Télechager mon CV
			</a>
			<a href="#contact" className="btn btn-primary cta_action">
				<BsChat />
				Discuter
			</a>
		</div>
	);
};

export default CTA;

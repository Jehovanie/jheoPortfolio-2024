import { BsChat } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";


const CTA = () => {
	return (
		<div className="cta">
			<a href="#project" className="btn cta_action">
				<FaComputer />
				Voir mes travaux
			</a>
			<a href="#contact" className="btn btn-primary cta_action">
				<BsChat />
				Discuter
			</a>
		</div>
	);
};

export default CTA;

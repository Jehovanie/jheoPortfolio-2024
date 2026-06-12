import { useTranslation } from "react-i18next";
import { BsChat } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";


const CTA = () => {
	const { t } = useTranslation();
	
	return (
		<div className="cta">
			<a href="#contact" className="btn btn-primary cta_action">
				<BsChat />
				{t('presentation.contacter-moi')}
			</a>
			<a href="#project" className="btn cta_action">
				<FaComputer />
				{t('presentation.watch-my-work')}
			</a>
		</div>
	);
};

export default CTA;

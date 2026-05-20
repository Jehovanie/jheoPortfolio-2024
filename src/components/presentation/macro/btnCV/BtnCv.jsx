import { useTranslation } from "react-i18next";
import CV from "./../../../../assets/pdf/CV-Jehovanie-RAMANDRIJOEL.pdf";
import { GoDownload } from "react-icons/go";

const BtnCv = () => {
		const { t } = useTranslation();
	
	return (
		<a href={CV} download className="btn cta_action cta_ending_action">
			<GoDownload />
			Télechager mon CV
			{t("download.cv")}
		</a>
	);
};

export default BtnCv;

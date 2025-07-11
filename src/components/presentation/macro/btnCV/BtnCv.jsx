import CV from "./../../../../assets/pdf/cv.pdf";
import { GoDownload } from "react-icons/go";


const BtnCv = () => {
    return (
		<a href={CV} download className="btn cta_action cta_ending_action">
			<GoDownload />
			Télechager mon CV
		</a>
	);
};

export default BtnCv;

import CV from "./../../../../assets/pdf/cv.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} download className="btn">
				Télechager mon CV
			</a>
			<a href="#contact" className="btn btn-primary">
				Discuter
			</a>
		</div>
	);
};

export default CTA;

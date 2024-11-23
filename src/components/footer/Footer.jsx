import "./footer.css";

const Footer = () => {
	let year = new Date().getFullYear();
	return (
		<div className="footer">
			&copy;
			<span id="year" className="signature_year">
				Novembre 2024,
			</span>
			<span className="signature_name"> Jehovanie RAMANDRIJOEL</span>
		</div>
	);
};

export default Footer;

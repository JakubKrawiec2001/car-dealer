import React from "react";
import "../styles/Brands.scss";
import ford from "../assets/icons/ford.svg";
import fiat from "../assets/icons/fiat.svg";
import opel from "../assets/icons/opel.svg";
import mercedes from "../assets/icons/mercedes.svg";
import peugeot from "../assets/icons/peugeot.svg";
import renault from "../assets/icons/renault.svg";

const Brands = () => {
	return (
		<section className="brands ">
			<div className="brands-container wrapper">
				<img src={opel} alt="opel icon" className="brand-icon" />
				<img src={ford} alt="ford icon" className="brand-icon" />
				<img src={fiat} alt="fiat icon" className="brand-icon" />
				<img src={mercedes} alt="mercedes icon" className="brand-icon" />
				<img src={peugeot} alt="peugeot icon" className="brand-icon" />
				<img src={renault} alt="renault icon" className="brand-icon" />
			</div>
		</section>
	);
};

export default Brands;

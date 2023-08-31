import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import heroCar from "../assets/images/hero-car.png";
import crown from "../assets/icons/crown.svg";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";

const Header = () => {
	return (
		<div className="header">
			<div className="header-r"></div>
			<img src={heroCar} alt="car" className="hero-car" />
			<div className="wrapper header-container">
				<span className="crown-box">
					<div className="line"></div>
					<img src={crown} alt="crown icon" className="crown-icon" />
				</span>
				<h1 className="hero-heading">Samochody dostawcze najwyższej jakości</h1>
				<p className="hero-text">
					Profesjonalnie zadbamy o każde twoje potrzeby. Nasze samochody staną
					się łącznikiem twojego biznesu ze światem.
				</p>
				<Link to="/" className="hero-btn">
					Nasza Flota
				</Link>
				<div className="header-contact-box">
					<img
						src={location}
						alt="location icon"
						className="header-contact-icon"
					/>
					<p className="header-contact-text">Wieliczka, ul. Dobra 86</p>

					<img src={phone} alt="phone icon" className="header-contact-icon" />
					<p className="header-contact-text">123-223-293</p>
				</div>
			</div>
		</div>
	);
};

export default Header;

import React from "react";
import "../styles/OurWork.scss";
import highway from "../assets/icons/highway.svg";
import truck from "../assets/icons/truck.svg";
import hands from "../assets/icons/hands.svg";

const OurWork = () => {
	return (
		<>
			<section className="ow-container wrapper">
				<h1 className="section-heading">
					<span>Nasze</span> działania
				</h1>

				<div className="ow-body">
					<div className="ow-item">
						<img src={truck} alt="" className="ow-img" />
						<p className="ow-text">Wybierasz samochód</p>
					</div>
					<div className="ow-item">
						<img src={hands} alt="" className="ow-img" />
						<p className="ow-text">Podpisujesz umowe</p>
					</div>
					<div className="ow-item">
						<img src={highway} alt="" className="ow-img" />
						<p className="ow-text">Odjeżdżasz swoim autem</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurWork;

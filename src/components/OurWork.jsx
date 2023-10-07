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
						<div className="ow-img-box">
							<img src={truck} alt="" className="ow-img" />
						</div>
						<p className="ow-text">Wybierasz samochód</p>
						<p className="ow-desc">
							Przejrzyj naszą ofertę samochodów dostawczych i wybierz swój typ
						</p>
					</div>
					<div className="ow-item">
						<div className="ow-img-box">
							<img src={hands} alt="" className="ow-img" />
						</div>
						<p className="ow-text">Podpisujesz umowe</p>
						<p className="ow-desc">
							Dopełnij wszelkich formalności i stań się posiadaczem swojego
							wybranego samochodu
						</p>
					</div>
					<div className="ow-item">
						<div className="ow-img-box">
							<img src={highway} alt="" className="ow-img" />
						</div>
						<p className="ow-text">Odjeżdżasz autem</p>
						<p className="ow-desc">
							Odjedź swoim nowym nabytkiem i ciesz się jego wysoką jakością
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurWork;

import React from "react";
import "../styles/FeaturedOffers.scss";
import { Link } from "react-router-dom";
import { shortText } from "../utils/shortText";

const FeaturedOffers = ({ cars }) => {
	return (
		<section className="fo-container wrapper">
			<h2 className="section-heading">
				<span>Wyróżnione</span> oferty
			</h2>
			<div className="fo-item-box">
				{cars.slice(0, 4).map((car) => {
					return (
						<Link to={`/details/${car.id}`} key={car.id} className="fo-item">
							<img src={car.imgUrl} alt="" className="fo-img" />

							<div className="fo-item-body">
								<p className="fo-name">
									{car.name} <span className="fo-model">{car.model}</span>
								</p>
								<p className="fo-desc">{shortText(car.description, 120)}</p>
								<div className="fo-text-box">
									<p className="fo-text">{car.power} KM</p>
									<p className="fo-text">{car.engineSize} cm3</p>
									<p className="fo-text">{car.fuel}</p>
									<p className="fo-text">{car.gearBox}</p>
								</div>
							</div>

							<div className="fo-details">
								<span className="fo-detail">
									<p>Cena</p>
									<p>{car.price} zł</p>
								</span>
								<span className="fo-detail">
									<p>Rok</p>
									<p>{car.year}</p>
								</span>
								<span className="fo-detail">
									<p>Przebieg</p>
									<p>{car.course} km</p>
								</span>
							</div>
						</Link>
					);
				})}
			</div>
			<Link to="/allCars">
				<button className="fo-btn">Sprawdź pełną ofertę</button>
			</Link>
		</section>
	);
};

export default FeaturedOffers;

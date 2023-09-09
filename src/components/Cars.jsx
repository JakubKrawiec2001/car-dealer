import React from "react";
import "../styles/Cars.scss";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import date from "../assets/icons/date.svg";
import gear from "../assets/icons/gear.svg";
import fuelPump from "../assets/icons/fuel-pump.svg";
import road from "../assets/icons/road.svg";
import { shortText } from "../utils/shortText";

const Cars = ({ cars }) => {
	return (
		<div className="cars-container wrapper">
			<div className="cars-heading-box">
				<h1 className="section-heading">
					<span>Nasza</span> Flota
				</h1>
				<div className="sort-box">
					<p>Sortuj</p>
					<button>
						Wyróżnione <IoIosArrowDown className="icon"></IoIosArrowDown>
					</button>
				</div>
			</div>
			<p className="text">
				Liczba ogłoszeń: <span>{cars.length}</span>
			</p>
			{cars?.map((car) => {
				return (
					<div className="cars-item" key={car?.id}>
						<img src={car?.imgUrl} alt="" className="cars-img" />
						<div className="cars-item-text-box">
							<div className="cars-item-text-box-l">
								<p className="car-name">
									{car?.name} <span>{car?.model}</span>
								</p>
								<span className="car-text-box">
									<p className="small-text">{car?.engineSize} cm3</p>
									<BsDot className="dot"></BsDot>
									<p className="small-text">{car?.power} KM</p>
								</span>
								<p className="featured">Wyróżnione</p>
								<span className="car-text-box">
									<img src={road} alt="" />
									<p>{car?.course}</p>
									<img src={fuelPump} alt="" />
									<p>{car?.fuel}</p>
									<img src={gear} alt="" />
									<p>{car?.gearBox}</p>
									<img src={date} alt="" />
									<p>{car?.year}</p>
								</span>
								<p className="car-desc">{shortText(car?.description, 200)}</p>
							</div>
							<div className="cars-item-text-box-r">
								<p>
									{car?.price}
									<span> PLN</span>
								</p>
								<AiOutlineHeart className="cars-icon"></AiOutlineHeart>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cars;

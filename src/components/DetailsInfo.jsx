import React from "react";
import "../styles/DetailsInfo.scss";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuFuel } from "react-icons/lu";
import { ImPower } from "react-icons/im";
import { GiRoad } from "react-icons/gi";
import { GiGearStickPattern } from "react-icons/gi";
import { PiEngineLight } from "react-icons/pi";

const DetailsInfo = ({ car }) => {
	return (
		<div className="di-container">
			<div className="di-item">
				<h2 className="di-heading">Najważniejsze cechy</h2>
				<div className="di-content">
					<div className="di-content-item">
						<p>
							<AiOutlineCalendar className="di-icon"></AiOutlineCalendar>Rocznik
						</p>
						<p>{car?.year}</p>
					</div>
					<div className="di-content-item">
						<p>
							<GiRoad className="di-icon"></GiRoad>
							Przebieg
						</p>
						<p>{car?.course} km</p>
					</div>
					<div className="di-content-item">
						<p>
							<LuFuel className="di-icon"></LuFuel>Rodziaj paliwa
						</p>
						<p>{car?.fuel}</p>
					</div>
					<div className="di-content-item">
						<p>
							<GiGearStickPattern className="di-icon"></GiGearStickPattern>
							Skrzynia biegów
						</p>
						<p>{car?.gearBox}</p>
					</div>
					<div className="di-content-item">
						<p>
							<ImPower className="di-icon"></ImPower>Moc silnika
						</p>
						<p>{car?.power} KM</p>
					</div>
					<div className="di-content-item">
						<p>
							<PiEngineLight className="di-icon"></PiEngineLight>
							Pojemność silnika
						</p>
						<p>{car?.engineSize} cm3</p>
					</div>
				</div>
			</div>
			<div className="di-item">
				<h2 className="di-heading">Wybrane wyposażenie</h2>
				<div className="di-content">
					<div className="di-content-item">
						<p>
							<AiOutlineCalendar className="di-icon"></AiOutlineCalendar>Rocznik
						</p>
						<p>{car?.year}</p>
					</div>
					<div className="di-content-item">
						<p>
							<AiOutlineCalendar className="di-icon"></AiOutlineCalendar>Rocznik
						</p>
						<p>{car?.year}</p>
					</div>
					<div className="di-content-item">
						<p>
							<AiOutlineCalendar className="di-icon"></AiOutlineCalendar>Rocznik
						</p>
						<p>{car?.year}</p>
					</div>
					<div className="di-content-item">
						<p>
							<AiOutlineCalendar className="di-icon"></AiOutlineCalendar>Rocznik
						</p>
						<p>{car?.year}</p>
					</div>
					<div className="di-content-item">
						<p>
							<AiOutlineCalendar className="di-icon"></AiOutlineCalendar>Rocznik
						</p>
						<p>{car?.year}</p>
					</div>
					<div className="di-content-item">
						<p>
							<AiOutlineCalendar className="di-icon"></AiOutlineCalendar>Rocznik
						</p>
						<p>{car?.year}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsInfo;

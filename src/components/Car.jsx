import React, { useState } from "react";
import "../styles/Car.scss";
import { BsDot } from "react-icons/bs";
import date from "../assets/icons/date.svg";
import gear from "../assets/icons/gear.svg";
import fuelPump from "../assets/icons/fuel-pump.svg";
import road from "../assets/icons/road.svg";
import { shortText } from "../utils/shortText";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/firebase";

const Car = ({ cars, currentUser }) => {
	const [option, setOption] = useState("");
	const navigate = useNavigate();
	const handleDelete = async (id) => {
		if (
			window.confirm(
				"Ogłoszenie zostanie usunięte. Aby potwierdzić kliknij - ok"
			)
		) {
			try {
				await deleteDoc(doc(db, "cars", id));
				toast.success("Usunięto ogłoszenie");
				navigate("/");
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div className="cars-container wrapper">
			<div className="cars-heading-box">
				<h1 className="section-heading">
					<span>Nasza</span> Flota
				</h1>
				<div className="sort-box">
					<p className="sort-text">Sortowanie</p>
					<select
						name="sort"
						onChange={(e) => {
							const value = e.target.value;
							setOption(value);
						}}>
						<option value="lower">Cena (niższa)</option>
						<option value="higher">Cena (wyższa)</option>
					</select>
				</div>
			</div>
			<p className="text">
				Liczba ogłoszeń: <span>{cars.length}</span>
			</p>
			{cars
				.sort((a, b) =>
					option === "lower"
						? parseInt(a.price) - parseInt(b.price)
						: parseInt(b.price) - parseInt(a.price)
				)
				?.map((car, id) => {
					return (
						<Link to={`/details/${car.id}`} className="cars-item" key={id}>
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
										<p className="car-text">{car?.course}</p>
										<img src={fuelPump} alt="" />
										<p className="car-text">{car?.fuel}</p>
										<img src={gear} alt="" />
										<p className="car-text">{car?.gearBox}</p>
										<img src={date} alt="" />
										<p className="car-text">{car?.year}</p>
									</span>
									<p className="car-desc">{shortText(car?.description, 200)}</p>
								</div>
								<div className="cars-item-text-box-r">
									<p>
										{car?.price}
										<span> PLN</span>
									</p>
									{currentUser?.uid === process.env.REACT_APP_ADMIN_IP && (
										<AiFillDelete
											className="cars-icon"
											onClick={() => handleDelete(car.id)}></AiFillDelete>
									)}
								</div>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default Car;

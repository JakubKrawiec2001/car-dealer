import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import Slider from "../components/Slider";
import "../styles/Details.scss";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
import { BsTelephoneForward } from "react-icons/bs";
import DetailsInfo from "../components/DetailsInfo";
import Footer from "../components/Footer";

const Details = () => {
	const { id } = useParams();
	const [car, setCar] = useState(null);
	const [images, setImages] = useState([]);
	const [showPhone, setShowPhone] = useState(false);

	useEffect(() => {
		id && getCarDetail();
	}, [id]);

	useEffect(() => {
		car && setImages(car.imgUrl);
	}, [car]);

	const getCarDetail = async () => {
		const docRef = doc(db, "cars", id);
		const carDetail = await getDoc(docRef);
		setCar(carDetail.data());
	};

	return (
		<div className="page">
			<div className="d-container wrapper">
				<div className="d-container-up">
					<Slider images={images}></Slider>

					<div className="d-text-box">
						<div className="d-name-box">
							<p>{car?.name}</p>
							<p>{car?.model}</p>
						</div>
						<div className="d-features-box">
							<p className="d-feature">{car?.year}</p>
							<BsDot className="d-dot"></BsDot>
							<p className="d-feature">{car?.course} km</p>
							<BsDot className="d-dot"></BsDot>
							<p className="d-feature">{car?.engineSize} cm3</p>
							<BsDot className="d-dot"></BsDot>
							<p className="d-feature">{car?.fuel}</p>
						</div>
						<p className="d-price">
							{car?.price} <span>PLN</span>
						</p>
						<div className="d-info-container">
							<div className="d-info-box">
								<p className="d-text">
									<AiOutlineClockCircle></AiOutlineClockCircle>Dostępne od ręki
								</p>
								<p className="d-text">
									<AiOutlineSafetyCertificate></AiOutlineSafetyCertificate>
									Najwyższa jakość
								</p>
							</div>
							<div className="d-btn-box">
								<a href="tel:123-223-293" className="d-btn">Kontakt ze sprzedającym</a>
								{!showPhone ? (
									<button className="d-btn" onClick={() => setShowPhone(true)}>
										Wyświetl numer
									</button>
								) : (
									<a href="tel:123-223-293" className="d-btn">
										<BsTelephoneForward></BsTelephoneForward>123-223-293
									</a>
								)}
							</div>
							<p className="d-text">
								<GrLocation></GrLocation> Wieliczka, ul. Dobra 86
							</p>
						</div>
					</div>
				</div>

				<DetailsInfo car={car}></DetailsInfo>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Details;

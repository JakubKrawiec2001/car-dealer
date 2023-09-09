import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

const Details = () => {
	const { id } = useParams();
	const [car, setCar] = useState(null);

	useEffect(() => {
		id && getCarDetail();
	}, [id]);

	const getCarDetail = async () => {
		const docRef = doc(db, "cars", id);
		const carDetail = await getDoc(docRef);
		setCar(carDetail.data());
	};

	return (
		<div>
			<p>{car?.name}</p>
			<img src={car?.imgUrl} alt="" />
		</div>
	);
};

export default Details;

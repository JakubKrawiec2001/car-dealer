import React from "react";
import Footer from "../components/Footer";
import Cars from "../components/Cars";

const AllCars = ({ cars }) => {
	return (
		<div className="page">
			<Cars cars={cars}></Cars>
			<Footer></Footer>
		</div>
	);
};

export default AllCars;

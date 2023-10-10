import React from "react";
import Footer from "../components/Footer";
import Car from "../components/Car";

const AllCars = ({ cars, currentUser}) => {
	return (
		<div className="page">
			<Car cars={cars} currentUser={currentUser}></Car>
			<Footer></Footer>
		</div>
	);
};

export default AllCars;

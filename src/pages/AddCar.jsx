import React from "react";
import AddCarForm from "../components/AddCarForm";
import "../styles/AddCar.scss"

const AddCar = ({currentUser}) => {
	return (
		<div className="add-car-container">
			<AddCarForm currentUser={currentUser}></AddCarForm>
		</div>
	);
};

export default AddCar;

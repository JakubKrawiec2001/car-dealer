import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import FeaturedOffers from "../components/FeaturedOffers";
import Footer from "../components/Footer";
import OurWork from "../components/OurWork";
import MoreInfo from "../components/MoreInfo";

const Home = ({ currentUser, cars }) => {
	return (
		<div className="page">
			<Header></Header>
			<Brands></Brands>
			<FeaturedOffers currentUser={currentUser} cars={cars}></FeaturedOffers>
			<MoreInfo></MoreInfo>
			<OurWork></OurWork>
			<Footer></Footer>
		</div>
	);
};

export default Home;

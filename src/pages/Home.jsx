import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import FeaturedOffers from "../components/FeaturedOffers";
import Footer from "../components/Footer";
import OurWork from "../components/OurWork";
import MoreInfo from "../components/MoreInfo";

const Home = ({ currentUser, cars, setCurrentUser }) => {
	return (
		<div className="page">
			<Header></Header>
			<Brands></Brands>
			<FeaturedOffers currentUser={currentUser} cars={cars}></FeaturedOffers>
			<MoreInfo></MoreInfo>
			<OurWork></OurWork>
			<Footer currentUser={currentUser} setCurrentUser={setCurrentUser}></Footer>
		</div>
	);
};

export default Home;

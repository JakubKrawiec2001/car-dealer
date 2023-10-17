import React from "react";
import "../styles/MoreInfo.scss";
import {TiInfoLargeOutline} from "react-icons/ti"


const MoreInfo = () => {
	return (
		<section className="mi-section">
			<div className="mi-container wrapper">
                <TiInfoLargeOutline className="mi-icon"></TiInfoLargeOutline>
				<h2 className="mi-heading">
					<span>Potrzebujesz</span> więcej informacji?
				</h2>
				<p className="mi-text">
					Zadzwoń i dowiedz się wszystkiego na temat naszej floty oraz
					szczegółów działania.
				</p>
				<a href="tel:123-223-293" className="mi-btn">Skontaktuj się</a>
			</div>
		</section>
	);
};

export default MoreInfo;

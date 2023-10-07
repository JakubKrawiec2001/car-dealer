import React from "react";
import "../styles/Contact.scss";
import { AiFillCloseCircle, AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import fb from "../assets/icons/facebook.png";

const Contact = ({ openContactPopup, setOpenContactPopup }) => {
	return (
		<>
			{openContactPopup && (
				<div className="contact-popup-container">
					<AiFillCloseCircle
						className="contact-close-icon"
						onClick={() => setOpenContactPopup(false)}></AiFillCloseCircle>
					<div className="contact-body">
						<div className="contact-body-text-box">
							<h2 className="contact-heading">Skontaktuj się z nami</h2>
							<div className="contact-text-container">
								<p className="contact-text">
									<MdLocationOn className="text-icon"></MdLocationOn> Wieliczka, ul. Test 86
								</p>
								<p className="contact-text">
									<AiFillPhone className="text-icon"></AiFillPhone> 123-223-293
								</p>
							</div>
							<a
								href="https://www.facebook.com/marek.konrad.3192479"
								target="_blank">
								<img src={fb} alt="facebook icon" className="fb-icon" />
							</a>
						</div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20522.1444055475!2d20.025510174678082!3d49.987583769244914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471643c46ad82f87%3A0x1d826671fc740453!2sWieliczka!5e0!3m2!1spl!2spl!4v1696518643757!5m2!1spl!2spl"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							className="map"></iframe>
					</div>
				</div>
			)}
		</>
	);
};

export default Contact;

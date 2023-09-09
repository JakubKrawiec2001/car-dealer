import React from "react";
import "../styles/Footer.scss";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<p className="logo">logo</p>
			<div className="f-line"></div>
			<div className="f-container wrapper">
				<div className="f-col">
					<p className="f-col-heading">Zakładki</p>
					<Link className="f-text">Start</Link>
					<Link className="f-text">Flota</Link>
					<Link className="f-text">O nas</Link>
					<Link className="f-text">Kontakt</Link>
					<Link className="f-text">Logowanie</Link>
				</div>
				<div className="f-col">
					<p className="f-col-heading">Oferta</p>
					<p className="f-text">Renault</p>
					<p className="f-text">Opel</p>
					<p className="f-text">Ford</p>
					<p className="f-text">Fiat</p>
					<p className="f-text">Mercedes</p>
					<p className="f-text">Peugeot</p>
					<p className="f-text">Citroen</p>
				</div>
				<div className="f-col">
					<p className="f-col-heading">Informacje</p>
					<p className="f-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dignissimos, voluptatem voluptates nemo quasi ullam, facilis dolorem
						commodi cupiditate optio excepturi iure ex dolore corrupti odit quod
						possimus similique placeat illo! Nihil est nesciunt laboriosam iure,
						fugit non reiciendis illo illum nisi consectetur dolorum ullam
						aperiam deserunt nulla perferendis nam quis.
					</p>
					<p className="f-col-heading">Konto</p>
					<div className="f-icons-box">
						<RiAccountCircleFill className="f-icon"></RiAccountCircleFill>
						<AiOutlineHeart className="f-icon"></AiOutlineHeart>
					</div>
				</div>
				<div className="f-col">
					<p className="f-col-heading">Contact</p>
					<p className="f-text">
						Jeśli masz jakieś pytania albo interesuję cię jakaś ofarta,
						skontaktuj się z nami.
					</p>
					<div className="f-icons-box">
						<BiLogoGmail className="f-icon"></BiLogoGmail>
						<AiFillPhone className="f-icon"></AiFillPhone>
					</div>
				</div>
			</div>
			<div className="f-line"></div>
			<p className="copyright">© Copyrights 2023 LOGO</p>
		</footer>
	);
};

export default Footer;

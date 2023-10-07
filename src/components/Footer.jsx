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
						Profesjonalnie zadbamy o każde twoje potrzeby. Nasze samochody staną
						się łącznikiem twojego biznesu ze światem. Przejrzyj naszą ofertę
						samochodów dostawczych i wybierz swój typ. Dopełnij wszelkich
						formalności i stań się posiadaczem swojego wybranego samochodu.
						Odjedź swoim nowym nabytkiem i ciesz się jego wysoką jakością.
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
			<p className="copyright">© Copyrights 2023</p>
			<p className="author">Stworzone przez: <span>Jakub Krawiec</span></p>
		</footer>
	);
};

export default Footer;

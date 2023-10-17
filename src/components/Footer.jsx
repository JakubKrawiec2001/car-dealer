import React from "react";
import "../styles/Footer.scss";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../config/firebase";
import { HashLink } from "react-router-hash-link";

const Footer = ({ currentUser, setCurrentUser }) => {
	const navigate = useNavigate();
	const logOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/login");
			})
			.catch((error) => {
				console.error(error);
			});

		setCurrentUser(null);
		return toast.success("Wylogowano");
	};
	return (
		<footer>
			<p className="logo">logo</p>
			<div className="f-line"></div>
			<div className="f-container wrapper">
				<div className="f-col">
					<p className="f-col-heading">Zakładki</p>
					<HashLink to="/#" className="f-text">
						Start
					</HashLink>
					<Link to="/allCars" className="f-text">
						Flota
					</Link>
					<a href="tel:123-223-293" className="f-text">
						Kontakt
					</a>
					{!currentUser ? (
						<Link to="/login" className="f-text">
							Logowanie
						</Link>
					) : (
						<p onClick={() => logOut()} className="f-text">
							Wyloguj
						</p>
					)}
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
					</div>
				</div>
				<div className="f-col">
					<p className="f-col-heading">Contact</p>
					<p className="f-text">
						Jeśli masz jakieś pytania albo interesuję cię jakaś ofarta,
						skontaktuj się z nami.
					</p>
					<div className="f-icons-box">
						<a href="mailto:kubakrawieckk04@gmail.com">
							<BiLogoGmail className="f-icon"></BiLogoGmail>
						</a>
						<a href="tel:123-223-293">
							<AiFillPhone className="f-icon"></AiFillPhone>
						</a>
					</div>
				</div>
			</div>
			<div className="f-line"></div>
			<p className="copyright">© Copyrights 2023</p>
			<p className="author">
				Stworzone przez: <span>Jakub Krawiec</span>
			</p>
		</footer>
	);
};

export default Footer;

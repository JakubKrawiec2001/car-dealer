import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import burgerIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/icons/logo.svg";
import Contact from "./Contact";

const Nav = ({ currentUser, setCurrentUser }) => {
	const [stickyNav, setStickyNav] = useState("");
	const [open, setOpen] = useState(false);
	const [openContactPopup, setOpenContactPopup] = useState(false);
	const navigate = useNavigate();

	const stickyNavbar = () => {
		let windowHeight = window.scrollY;
		if (windowHeight > 100) {
			setStickyNav("sticky-nav");
		} else {
			setStickyNav("");
		}
	};

	const handleOpenNav = () => {
		!open ? setOpen(true) : setOpen(false);
	};
	const handleOpenContactPopup = () => {
		setOpenContactPopup(true)
		setOpen(false)
	}

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

	useEffect(() => {
		window.addEventListener("scroll", stickyNavbar);
	}, []);

	return (
		<>
			<Contact
				openContactPopup={openContactPopup}
				setOpenContactPopup={setOpenContactPopup}></Contact>
			<nav className={stickyNav}>
				<div className="wrapper nav-container">
					<HashLink to="/#">
						<img src={logo} alt="logo" className="logo" />
					</HashLink>
					<div className="menu">
						<Link to="/" className="menu-item">
							Start
						</Link>
						<Link to="/allCars" className="menu-item">
							Flota
						</Link>

						<p
							className="menu-item"
							onClick={() =>
								!openContactPopup
									? setOpenContactPopup(true)
									: setOpenContactPopup(false)
							}>
							Kontakt
						</p>
						{currentUser?.uid === process.env.REACT_APP_ADMIN_IP && (
							<Link to="/addCar" className="menu-item">
								Dodaj ogłoszenie
							</Link>
						)}
						{!currentUser ? (
							<Link to="/login" className="menu-login-btn">
								Zaloguj się
							</Link>
						) : (
							<p onClick={() => logOut()} className="menu-login-btn">
								Wyloguj się
							</p>
						)}
					</div>
					{!open ? (
						<img
							src={burgerIcon}
							alt="mobile menu icon"
							className="burger-btn"
							onClick={() => handleOpenNav()}
						/>
					) : (
						<img
							src={closeIcon}
							alt="mobile menu close icon"
							className="burger-btn"
							onClick={() => handleOpenNav()}
						/>
					)}

					<div className={!open ? "mobile-menu" : "mobile-menu open-nav"}>
						<p className="mobile-menu-item mobile-menu-heading">Menu</p>
						<Link
							to="/"
							className="mobile-menu-item"
							onClick={() => setOpen(false)}>
							Start
						</Link>
						<Link
							to="/allCars"
							className="mobile-menu-item"
							onClick={() => setOpen(false)}>
							Flota
						</Link>

						<p className="mobile-menu-item" onClick={() => handleOpenContactPopup()}>
							Kontakt
						</p>
						{currentUser?.uid === process.env.REACT_APP_ADMIN_IP && (
							<Link
								to="/addCar"
								className="mobile-menu-item"
								onClick={() => setOpen(false)}>
								Dodaj ogłoszenie
							</Link>
						)}
						{!currentUser ? (
							<Link
								to="/login"
								className="mobile-menu-item mobile-menu-login-btn">
								Zaloguj się
							</Link>
						) : (
							<p
								onClick={() => logOut()}
								className="mobile-menu-item mobile-menu-login-btn">
								Wyloguj się
							</p>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;

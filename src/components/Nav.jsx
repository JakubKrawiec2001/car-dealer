import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import burgerIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Nav = ({ currentUser, setCurrentUser }) => {
	const [stickyNav, setStickyNav] = useState("");
	const [open, setOpen] = useState(false);
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

	const logOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/login");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		window.addEventListener("scroll", stickyNavbar);
	}, []);
	return (
		<nav className={stickyNav}>
			<div className="wrapper nav-container">
				<Link to="/" className="logo-box">
					<img src={logo} alt="logo" className="logo-icon" />
					<p className="logo-text">LOGO</p>
				</Link>
				<div className="menu">
					<Link to="/" className="menu-item">
						Start
					</Link>
					<Link to="/" className="menu-item">
						Flota
					</Link>
					<Link to="/" className="menu-item">
						O nas
					</Link>
					<Link to="/" className="menu-item">
						Kontakt
					</Link>
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
						to="/"
						className="mobile-menu-item"
						onClick={() => setOpen(false)}>
						Flota
					</Link>
					<Link
						to="/"
						className="mobile-menu-item"
						onClick={() => setOpen(false)}>
						O nas
					</Link>
					<Link
						to="/"
						className="mobile-menu-item"
						onClick={() => setOpen(false)}>
						Kontakt
					</Link>
					<Link to="/login" className="mobile-menu-item mobile-menu-login-btn">
						Zaloguj się
					</Link>
				</div>
				{currentUser ? (
					<button onClick={() => logOut()}>Wyloguj</button>
				) : (
					<Link to="/login" className="login-btn">
						Zaloguj się
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Nav;

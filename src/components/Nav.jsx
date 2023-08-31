import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import burgerIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";

const Nav = () => {
	const [stickyNav, setStickyNav] = useState("");
	const [open, setOpen] = useState(false);

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
					<Link href="" className="menu-item">
						Start
					</Link>
					<Link href="" className="menu-item">
						Flota
					</Link>
					<Link href="" className="menu-item">
						O nas
					</Link>
					<Link href="" className="menu-item">
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
						href=""
						className="mobile-menu-item"
						onClick={() => setOpen(false)}>
						Start
					</Link>
					<Link
						href=""
						className="mobile-menu-item"
						onClick={() => setOpen(false)}>
						Flota
					</Link>
					<Link
						href=""
						className="mobile-menu-item"
						onClick={() => setOpen(false)}>
						O nas
					</Link>
					<Link
						href=""
						className="mobile-menu-item"
						onClick={() => setOpen(false)}>
						Kontakt
					</Link>
					<Link to="/login" className="mobile-menu-item mobile-menu-login-btn">
						Zaloguj się
					</Link>
				</div>

				<Link to="/login" className="login-btn">
					Zaloguj się
				</Link>
			</div>
		</nav>
	);
};

export default Nav;

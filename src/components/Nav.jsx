import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import burgerIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import Contact from "./Contact";

const Nav = ({ currentUser, setCurrentUser }) => {
	const [stickyNav, setStickyNav] = useState("");
	const [open, setOpen] = useState(false);
	const [openAccountMenu, setopenAccountMenu] = useState(false);
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

	const handleAccountMenu = () => {
		!openAccountMenu ? setopenAccountMenu(true) : setopenAccountMenu(false);
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/login");
			})
			.catch((error) => {
				console.error(error);
			});
		setopenAccountMenu(false);
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
					<Link to="/">
						<p className="logo-text">LOGO</p>
					</Link>
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

						<RiAccountCircleFill
							className="nav-icon"
							onClick={handleAccountMenu}></RiAccountCircleFill>
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

						<Link
							to="/"
							className="mobile-menu-item"
							onClick={() => setOpen(false)}>
							Kontakt
						</Link>
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

					{openAccountMenu ? (
						<div className="account-menu">
							<p className="user-name">{currentUser?.email}</p>
							{currentUser?.uid === process.env.REACT_APP_ADMIN_IP ? (
								<Link to="/addCar" onClick={() => setopenAccountMenu(false)}>
									<button className="add-new-publication">
										<IoIosAdd className="add-icon"></IoIosAdd>Dodaj ogłoszenie
									</button>
								</Link>
							) : null}
							{!currentUser ? (
								<Link to="/login" className="login-btn">
									Zaloguj się
								</Link>
							) : (
								<button onClick={() => logOut()} className="login-btn">
									Wyloguj się
								</button>
							)}
						</div>
					) : null}
				</div>
			</nav>
		</>
	);
};

export default Nav;

import React, { useState } from "react";
import "../styles/LoginForm.scss";
import google from "../assets/icons/google.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({
	signUp,
	signIn,
	setEmail,
	setPassword,
	setReapetPassword,
}) => {
	const [login, setLogin] = useState(false);
	const navigate = useNavigate();

	const handleChangeLogin = () => {
		if (login) {
			setLogin(false);
		} else {
			setLogin(true);
		}
	};
	const signInWithGoogle = async (e) => {
		e.preventDefault();
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
		navigate("/");
		return toast.success("Zalogowano");
	};

	return (
		<form className="login-container">
			{!login ? (
				<>
					<h2 className="login-heading">Logowanie</h2>
					<input
						type="email"
						placeholder="Email"
						className="login-input"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Hasło"
						className="login-input"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</>
			) : (
				<>
					<h2 className="login-heading">Rejestracja</h2>
					<input
						type="email"
						placeholder="Email"
						className="login-input"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Hasło"
						className="login-input"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Powtórz hasło"
						className="login-input"
						onChange={(e) => setReapetPassword(e.target.value)}
					/>
				</>
			)}

			{!login ? (
				<button className="login-btn" onClick={signIn}>
					Zaloguj się
				</button>
			) : (
				<button className="login-btn" onClick={signUp}>
					Zarejestruj się
				</button>
			)}

			<div className="login-choice-box">
				<div className="login-line"></div>
				<p className="login-text">lub</p>
				<div className="login-line"></div>
			</div>
			<button className="login-google" onClick={(e) => signInWithGoogle(e)}>
				<img src={google} alt="google icon" className="google-icon" />
				Zaloguj się z Google
			</button>
			{login ? (
				<p className="login-text">
					Masz konto?
					<span className="login-text-span" onClick={() => handleChangeLogin()}>
						Zaloguj się
					</span>
				</p>
			) : (
				<p className="login-text">
					Nie masz jeszcze konta?
					<span className="login-text-span" onClick={() => handleChangeLogin()}>
						Zarejestruj się
					</span>
				</p>
			)}
		</form>
	);
};

export default LoginForm;

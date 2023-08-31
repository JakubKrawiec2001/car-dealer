import React, { useState } from "react";
import "../styles/LoginForm.scss";
import google from "../assets/icons/google.png";

const LoginForm = ({
	signUp,
	signIn,
	signInWithGoogle,
	setEmail,
	setPassword,
	error,
}) => {
	const [login, setLogin] = useState(false);

	const handleChangeLogin = () => {
		if (login) {
			setLogin(false);
		} else {
			setLogin(true);
		}
	};

	return (
		<form className="login-container">
			{!login ? <h2>Zaloguj sie</h2> : <h2>Zarejestruj się</h2>}

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
			{error ? (
				<span className="login-error">Błędny login bądź hasło</span>
			) : null}

			{!login ? (
				<button className="login-btn" onClick={signIn}>
					Zaloguj się
				</button>
			) : (
				<button className="login-btn" onClick={signUp}>
					Zarejestruj się
				</button>
			)}

			<span>
				<div className="login-line"></div>
				<p>lub</p>
				<div className="login-line"></div>
			</span>
			<button className="login-google" onClick={signInWithGoogle}>
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

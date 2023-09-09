import React from "react";
import "../styles/LoginPage.scss";
import LoginForm from "../components/LoginForm";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginPage = ({
	signUp,
	signIn,
	signInWithGoogle,
	setEmail,
	setPassword,
	setReapetPassword,
}) => {
	return (
		<div className="login-page">
			<Link to="/">
				<AiFillCloseCircle className="login-page-close-btn"></AiFillCloseCircle>
			</Link>
			<LoginForm
				signUp={signUp}
				signIn={signIn}
				signInWithGoogle={signInWithGoogle}
				setEmail={setEmail}
				setPassword={setPassword}
				setReapetPassword={setReapetPassword}></LoginForm>
		</div>
	);
};

export default LoginPage;

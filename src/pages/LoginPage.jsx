import React from "react";
import "../styles/LoginPage.scss";
import LoginForm from "../components/LoginForm";

const LoginPage = ({
	signUp,
	signIn,
	signInWithGoogle,
	setEmail,
	setPassword,
	error,
}) => {
	return (
		<div className="login-page">
			<LoginForm
				signUp={signUp}
				signIn={signIn}
				signInWithGoogle={signInWithGoogle}
				setEmail={setEmail}
				setPassword={setPassword}
				error={error}></LoginForm>
		</div>
	);
};

export default LoginPage;

import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import { auth, googleProvider } from "./config/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [currentUser, setCurrentUser] = useState("");

	const navigate = useNavigate();

	const signUp = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.error(err);
		}
	};
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				setCurrentUser(user?.auth?.currentUser?.email);

				navigate("/");
			})
			.catch((error) => {
				setError(true);
			});
	};
	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className="App">
			<Nav currentUser={currentUser} setCurrentUser={setCurrentUser}></Nav>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route
					path="/login"
					element={
						<LoginPage
							signUp={signUp}
							signIn={signIn}
							signInWithGoogle={signInWithGoogle}
							setEmail={setEmail}
							setPassword={setPassword}
							error={error}></LoginPage>
					}></Route>
			</Routes>
		</div>
	);
}

export default App;

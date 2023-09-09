import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import { auth, db } from "./config/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCar from "./pages/AddCar";
import AllCars from "./pages/AllCars";
import Details from "./pages/Details";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [reapetPassword, setReapetPassword] = useState("");
	const [currentUser, setCurrentUser] = useState(null);
	const [cars, setCars] = useState([]);
	const navigate = useNavigate();

	const signUp = async (e) => {
		e.preventDefault();
		if (email && password && password === reapetPassword) {
			try {
				await createUserWithEmailAndPassword(auth, email, password);
			} catch (err) {
				console.error(err);
			}
			setEmail("");
			setPassword("");
			setReapetPassword("");
			navigate("/");
			return toast.success("Rejestracja powiodła się");
		} else if (password !== reapetPassword) {
			return toast.error("Podane hasła muszą być takie same");
		} else {
			return toast.error("Uzupełnij wszystkie pola");
		}
	};
	const signIn = async (e) => {
		e.preventDefault();
		if (email && password) {
			try {
				await signInWithEmailAndPassword(auth, email, password);
			} catch (err) {
				console.error(err);
			}
			setEmail("");
			setPassword("");
			navigate("/");
			return toast.success("Zalogowano");
		} else {
			return toast.error("Niepoprawny email bądź hasło");
		}
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setCurrentUser(authUser);
			} else {
				setCurrentUser(null);
			}
		});
	}, []);

	useEffect(() => {
		const unsub = onSnapshot(
			collection(db, "cars"),
			(snapshot) => {
				let list = [];
				snapshot.docs.forEach((doc) => {
					list.push({ id: doc.id, ...doc.data() });
				});
				setCars(list);
			},
			(error) => {
				console.log(error);
			}
		);

		return () => {
			unsub();
		};
	}, []);

	return (
		<div className="App">
			<Nav currentUser={currentUser} setCurrentUser={setCurrentUser}></Nav>
			<ToastContainer position="top-center"></ToastContainer>
			<Routes>
				<Route
					path="/"
					element={<Home currentUser={currentUser} cars={cars}></Home>}></Route>
				<Route
					path="/allCars"
					element={<AllCars cars={cars}></AllCars>}></Route>
				<Route path="/details/:id" element={<Details></Details>}></Route>
				<Route
					path="/login"
					element={
						currentUser ? (
							<Navigate to="/"></Navigate>
						) : (
							<LoginPage
								signUp={signUp}
								signIn={signIn}
								setEmail={setEmail}
								setPassword={setPassword}
								setReapetPassword={setReapetPassword}></LoginPage>
						)
					}></Route>
				<Route
					path="/addCar"
					element={
						currentUser?.uid ? (
							<AddCar currentUser={currentUser}></AddCar>
						) : (
							<Navigate to="/"></Navigate>
						)
					}></Route>
				<Route
					path="/editCar/:id"
					element={
						currentUser?.uid ? (
							<AddCar currentUser={currentUser}></AddCar>
						) : (
							<Navigate to="/"></Navigate>
						)
					}></Route>
			</Routes>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}

export default App;

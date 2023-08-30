import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav></Nav>

				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/login" element={<LoginPage></LoginPage>}></Route>
				</Routes>
			</Router>
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

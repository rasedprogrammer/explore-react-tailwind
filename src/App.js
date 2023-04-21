import "./App.css";
import AssignmentMark from "./components/AssignmentMark/AssignmentMark";
import Navber from "./components/Navbar/Navber";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import Pricing from "./components/Pricing/Pricing";

function App() {
	return (
		<div className="App">
			<Navber></Navber>
			<h1 className="text-3xl font-bold underline">
				Hello From React Test Teailwind CSS
			</h1>
			<p>Hello From React Test Teailwind CSS</p>
			<Pricing></Pricing>
			<AssignmentMark></AssignmentMark>
			<PhoneBar></PhoneBar>
		</div>
	);
}

export default App;

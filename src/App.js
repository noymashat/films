import "./styles/App.css";
import { Jumbotron } from "./components/Jumbo";
import FilmsContainer from "./containers/FilmsContainer";
// import FilmsContainer from "./containers/FilmsContainer";

function App() {
	return (
		<div className="App">
			<Jumbotron />
			<div className="App-films">
				<FilmsContainer />
			</div>
		</div>
	);
}

export default App;

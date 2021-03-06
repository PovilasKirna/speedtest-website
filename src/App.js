import Timer from "./components/Timer";
import Input from "./components/Input";
import TextBox from "./components/TextBox";
import StartScreen from "./components/StartScreen";
import EndScreen from "./components/EndScreen";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

function App() {
	const { gameStarted, gameEnded } = useSelector((state) => state.gameControl);

	return (
		<>
			<Helmet>
				<title>Speed Test</title>
			</Helmet>
			<div className="flex flex-col w-screen h-screen m-0 content-center justify-center items-center">
				{!gameStarted && !gameEnded && <StartScreen />}
				{gameStarted && !gameEnded && (
					<>
						<Timer />
						<TextBox />
						<Input />
					</>
				)}
				{gameEnded && <EndScreen />}
			</div>
		</>
	);
}

export default App;

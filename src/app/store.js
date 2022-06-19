import { configureStore } from "@reduxjs/toolkit";
import setTime from "./time";
import setCurrentTime from "./time";
import startGame from "./gameControl";
import endGame from "./gameControl";
import resetGame from "./gameControl";
import repeatGame from "./gameControl";
import setInput from "./input";
import setErrors from "./input";
import setRawWpm from "./gameControl";
import setWpm from "./gameControl";
import setError from "./gameControl";
import resetInput from "./input";

export default configureStore({
	reducer: {
		selectedTime: setTime,
		setCurrentTime,

		gameControl: startGame,
		endGame,
		resetGame,
		repeatGame,
		setWpm,
		setRawWpm,
		setError,

		input: setInput,
		setErrors,
		resetInput,
	},
});

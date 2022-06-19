import { configureStore } from "@reduxjs/toolkit";
import setTime from "./time";
import startGame from "./gameControl";
import endGame from "./gameControl";
import setInput from "./input";
import setErrors from "./input";

export default configureStore({
	reducer: {
		selectedTime: setTime,
		gameControl: startGame,
		endGame,
		input: setInput,
		setErrors,
	},
});

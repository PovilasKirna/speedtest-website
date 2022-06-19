import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
	name: "gameControl",
	initialState: {
		gameStarted: false,
		gameEnded: false,
		rawWpm: [],
		wpm: [],
		error: [],
	},
	reducers: {
		startGame: (state) => {
			state.gameStarted = true;
			state.gameEnded = false;
		},
		endGame: (state) => {
			state.gameEnded = true;
			state.gameStarted = false;
		},
		resetGame: (state) => {
			state.gameStarted = false;
			state.gameEnded = false;
			state.rawWpm = [];
			state.wpm = [];
			state.error = [];
		},
		repeatGame: (state) => {
			state.gameStarted = true;
			state.gameEnded = false;
			state.rawWpm = [];
			state.wpm = [];
			state.error = [];
		},
		setWpm: (state, action) => {
			if (!state.wpm.some((e) => e.x === action.payload.x)) {
				state.wpm.push(action.payload);
			}
		},
		setRawWpm: (state, action) => {
			if (!state.rawWpm.some((e) => e.x === action.payload.x)) {
				state.rawWpm.push(action.payload);
			}
		},
		setError: (state, action) => {
			if (!state.error.some((e) => e.x === action.payload.x)) {
				state.error.push(action.payload);
			}
		},
	},
});

export const {
	startGame,
	endGame,
	resetGame,
	repeatGame,
	setError,
	setRawWpm,
	setWpm,
} = gameSlice.actions;
export default gameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
	name: "gameControl",
	initialState: {
		gameStarted: false,
		gameEnded: false,
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
	},
});

export const { startGame, endGame } = gameSlice.actions;
export default gameSlice.reducer;

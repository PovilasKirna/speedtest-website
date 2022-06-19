import { createSlice } from "@reduxjs/toolkit";

export const timeSlice = createSlice({
	name: "time",
	initialState: {
		selectedTime: 15,
		currentTime: 0,
	},
	reducers: {
		setTime: (state, action) => {
			state.selectedTime = action.payload;
		},
		setCurrentTime: (state, action) => {
			state.currentTime = action.payload;
		},
	},
});

export const { setTime, setCurrentTime } = timeSlice.actions;
export default timeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const timeSlice = createSlice({
	name: "time",
	initialState: {
		selectedTime: 15,
	},
	reducers: {
		setTime: (state, action) => {
			state.selectedTime = action.payload;
		},
	},
});

export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;

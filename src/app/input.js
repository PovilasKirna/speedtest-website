import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
	name: "input",
	initialState: {
		input: "",
		errors: {
			index: [],
			count: 0,
		},
	},
	reducers: {
		setInput: (state, action) => {
			state.input = action.payload;
		},
		setErrors: (state, action) => {
			state.errors.count = state.errors.index.length + 1;

			if (state.errors.index.indexOf(action.payload) === -1) {
				state.errors.index.push(action.payload);
			}
		},
		resetInput: (state) => {
			state.input = "";
			state.errors.index = [];
			state.errors.count = 0;
		},
	},
});

export const { setInput, setErrors, resetInput } = inputSlice.actions;
export default inputSlice.reducer;

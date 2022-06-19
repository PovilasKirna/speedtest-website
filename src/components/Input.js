import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../app/input";

export default function Input() {
	const dispatch = useDispatch();
	const { input } = useSelector((state) => state.input);

	return (
		<input
			id="typingBox"
			type={"text"}
			value={input}
			onInput={(e) => dispatch(setInput(e.target.value))}
			className="border-2 border-black"
			autoFocus
			autoComplete="off"
		></input>
	);
}

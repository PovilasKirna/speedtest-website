import React from "react";
import randomWords from "random-words";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setErrors } from "../app/input";

export default function TextBox() {
	const [words, setWords] = useState("");
	const [characters, setCharacters] = useState([]);
	const dispatch = useDispatch();
	const { input } = useSelector((state) => state.input);

	useEffect(() => {
		setWords(randomWords({ exactly: 100, join: " " }));
	}, []);

	useEffect(() => {
		setCharacters(words.split(""));
	}, [words]);

	useEffect(() => {
		for (const char in characters) {
			if (characters[char] === input[char]) {
				document.getElementById(`char-${char}`).classList.add("text-green-400");
			} else if (characters[char] !== input[char] && char < input.length) {
				document.getElementById(`char-${char}`).classList.add("text-red-400");
				dispatch(setErrors(char));
			}
		}
	}, [input, characters, dispatch]);

	return (
		<div className="text-justify w-2/3 m-4 font-bold text-2xl select-none">
			{characters.map((character, index) => (
				<span
					key={index}
					id={`char-${index}`}
					className={`text-neutral-400 underline1 ${
						index === input.length ? "underline" : ""
					}`}
				>
					{character}
				</span>
			))}
		</div>
	);
}

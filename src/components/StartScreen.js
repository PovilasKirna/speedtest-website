import React from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../app/gameControl";
import TimeBtn from "./TimeBtn";
import { setInput } from "../app/input";

export default function StartScreen() {
	const dispatch = useDispatch();

	return (
		<div className="absolute flex flex-col w-full h-full content-center justify-center items-center backdrop-blur-md">
			<button
				className="py-4 px-8 rounded-lg bg-white border-neutral-400 shadow-md border-2 hover:border-neutral-500 hover:shadow-indigo-500/40"
				onClick={() => {
					dispatch(startGame());
					dispatch(setInput(""));
				}}
			>
				Start the game!
			</button>
			<div className="flex flex-row text-center text-xl text-neutral-400 ">
				<TimeBtn time={15} />
				<TimeBtn time={30} />
				<TimeBtn time={45} />
			</div>
		</div>
	);
}

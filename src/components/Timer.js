import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { endGame } from "../app/gameControl";

export default function Timer() {
	const dispatch = useDispatch();
	const { selectedTime: time } = useSelector((state) => state.selectedTime);
	const [seconds, setSeconds] = useState(time);
	const [fontColor, setFontColor] = useState("neutral-400");

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds - 1 <= Math.floor(time / 3)) {
				setFontColor("red-400");
			}
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				clearInterval(interval);
				dispatch(endGame());
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [seconds, time, dispatch]);

	return (
		<div className={`text-6xl font-bold text-${fontColor}`}>{seconds}</div>
	);
}

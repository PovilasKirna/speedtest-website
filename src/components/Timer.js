import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { endGame } from "../app/gameControl";
import { setCurrentTime } from "../app/time";
import { setWpm, setError, setRawWpm } from "../app/gameControl";

export default function Timer() {
	const dispatch = useDispatch();
	const { selectedTime: time } = useSelector((state) => state.selectedTime);
	const { input, errors } = useSelector((state) => state.input);
	const [seconds, setSeconds] = useState(time);
	const [fontColor, setFontColor] = useState("neutral-400");
	const [lastErrorCount, setLastErrorCount] = useState(0);

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

	useEffect(() => {
		dispatch(setCurrentTime(seconds));
		dispatch(
			setRawWpm({
				x: time - seconds,
				y: Math.floor(input.length / 5 / (time / 60)),
			})
		);
		if (input.length === 0) {
			dispatch(setWpm({ x: time - seconds, y: 0 }));
		} else {
			dispatch(
				setWpm({
					x: time - seconds,
					y: Math.floor(
						((input.length / 5 / (time / 60)) *
							(((input.length - errors.count) / input.length) * 100)) /
							100
					),
				})
			);
		}
		if (errors.count > lastErrorCount) {
			dispatch(
				setError({ x: time - seconds, y: errors.count - lastErrorCount })
			);
			setLastErrorCount(errors.count);
		}
	}, [seconds, time, input, errors, lastErrorCount, dispatch]);

	return (
		<div className={`text-6xl font-bold text-${fontColor}`}>{seconds}</div>
	);
}

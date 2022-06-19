import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTime } from "../app/time";

export default function TimeBtn({ time }) {
	const { selectedTime } = useSelector((state) => state.selectedTime);
	const dispatch = useDispatch();
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		if (time === selectedTime) {
			setSelected(true);
			return;
		}
		setSelected(false);
	}, [selectedTime, time]);

	return (
		<>
			{selected && (
				<button
					className="m-2 hover:text-orange-400 text-orange-400"
					onClick={() => dispatch(setTime(time))}
				>
					{time}s
				</button>
			)}
			{!selected && (
				<button
					className="m-2 hover:text-orange-400"
					onClick={() => dispatch(setTime(time))}
				>
					{time}s
				</button>
			)}
		</>
	);
}

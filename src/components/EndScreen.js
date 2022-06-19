import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function EndScreen() {
	const dispatch = useDispatch();
	const { input, errors } = useSelector((state) => state.input);
	const { selectedTime } = useSelector((state) => state.selectedTime);
	const [rawWpm, setRawWpm] = useState(0);

	useEffect(() => {
		//calculate raw wpm
		setRawWpm(Math.floor(input.length / 5 / (selectedTime / 60)));
	}, [input]);

	return (
		<div className="absolute flex flex-col w-full h-full content-center justify-center items-center backdrop-blur-md">
			<div className="text-center text-6xl font-bold text-neutral-600">
				Game Over
			</div>
			<div className="text-center text-xl text-neutral-600">
				Your raw WPM: {rawWpm}
			</div>
			<div className="text-center text-xl text-neutral-600">
				You wrote {input.length} characters
			</div>
			<div className="text-center text-xl text-neutral-600">
				You made {errors.count} errors
			</div>
		</div>
	);
}

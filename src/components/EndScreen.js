import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { repeatGame, resetGame } from "../app/gameControl";
import { resetInput } from "../app/input";

import { useEffect, useState } from "react";
import { Tooltip } from "flowbite-react";
import LineChart from "../components/LineChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRotateRight,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function EndScreen() {
	const { input, errors } = useSelector((state) => state.input);
	const { selectedTime } = useSelector((state) => state.selectedTime);
	const dispatch = useDispatch();

	const {
		rawWpm: rawData,
		wpm: wpmData,
		error: errorData,
	} = useSelector((state) => state.gameControl);

	const [rawWpm, setRawWpm] = useState(0);
	const [wpm, setWpm] = useState(0);
	const [accuracy, setAccuracy] = useState(0);

	useEffect(() => {
		//calculate raw wpm
		if (input.length === 0) return setRawWpm(0);
		setRawWpm(input.length / 5 / (selectedTime / 60));
	}, [input, selectedTime]);

	useEffect(() => {
		//calculate accuracy
		if (input.length === 0) return setAccuracy(0);
		setAccuracy(((input.length - errors.count) / input.length) * 100);
	}, [input, errors]);

	useEffect(() => {
		//calculate wpm
		if (rawWpm === 0) return setWpm(0);
		setWpm(rawWpm * (accuracy / 100));
	}, [rawWpm, accuracy]);

	return (
		<div className="absolute flex flex-col w-full h-full content-center justify-center items-center backdrop-blur-md">
			<div className="text-center text-6xl font-bold text-neutral-600">
				Game Over
			</div>
			<div className="flex flex-col w-[50vw] ">
				<div className="flex flex-row">
					<div className=" max-w-fit">
						<Tooltip
							content={
								Math.round(wpm * 10) / 10 +
								" (" +
								(input.length * 60) / selectedTime +
								"cpm )"
							}
							placement="top"
							trigger="hover"
							animation="duration-500"
						>
							<div
								className="flex flex-col text-left text-5xl text-neutral-600"
								data-tooltip-target="wpm"
							>
								<span className="top">wpm</span>
								<span className="text-yellow-400">{Math.floor(wpm)}</span>
							</div>
						</Tooltip>

						<Tooltip
							content={Math.round(accuracy * 10) / 10 + "%"}
							placement="top"
							trigger="hover"
							animation="duration-500"
						>
							<div className="flex flex-col text-left text-5xl text-neutral-600">
								<span className="top">acc</span>
								<span className="text-yellow-400">{Math.floor(accuracy)}%</span>
							</div>
						</Tooltip>
					</div>
					<div className=" w-full">
						<LineChart
							selectedTime={selectedTime}
							rawData={rawData}
							wpmData={wpmData}
							errorData={errorData}
						/>
					</div>
				</div>

				<div className="col-span-2 flex flex-row justify-between ">
					<div className="flex flex-col text-left text-neutral-600 mx-2">
						<span className="top text-[1rem] leading-4 mb-1">test type</span>
						<div className="flex flex-col bottom text-[1rem] leading-4">
							<span className="text-yellow-400">time {selectedTime}</span>
							<span className="text-yellow-400">english</span>
						</div>
					</div>
					<Tooltip
						content={Math.round(rawWpm * 10) / 10}
						placement="top"
						trigger="hover"
						animation="duration-500"
					>
						<div className="flex flex-col text-left text-neutral-600 mx-2">
							<span className="top text-[1rem] leading-4 mb-1">raw</span>
							<div className="flex flex-col bottom text-[2rem] leading-8">
								<span className="text-yellow-400">{Math.floor(rawWpm)}</span>
							</div>
						</div>
					</Tooltip>
					<div className="flex flex-col text-left text-neutral-600 mx-2">
						<span className="top text-[1rem] leading-4 mb-1">characters</span>
						<div className="flex flex-col bottom text-[2rem] leading-8">
							<span className="text-yellow-400">
								{input.length}/{input.length}/{input.length}/{input.length}
							</span>
						</div>
					</div>
					<div className="flex flex-col text-left text-xl text-neutral-600 mx-2">
						<span className="top text-[1rem] leading-4 mb-1">errors</span>
						<div className="flex flex-col bottom text-[2rem] leading-8">
							<span className="text-yellow-400">{errors.count}</span>
						</div>
					</div>
					<div className="flex flex-col text-left text-xl text-neutral-600 mx-2">
						<span className="top text-[1rem] leading-4 mb-1">time</span>
						<div className="flex flex-col bottom text-[2rem] leading-8">
							<span className="text-yellow-400">{selectedTime}</span>
						</div>
					</div>
				</div>
				<div className="flex flex-row w-full pt-4 justify-center">
					<button
						className="px-[32px] h-[44px] text-xl bg-white hover:bg-neutral-200 hover:text-yellow-400 mx-2 rounded-lg"
						// onClick={() => {
						// 	dispatch(resetInput(""));
						// 	dispatch(resetGame());
						// }}
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>

					<button
						className="px-[32px] h-[44px] text-xl bg-white hover:bg-neutral-200 hover:text-yellow-400 mx-2 rounded-lg"
						// onClick={() => dispatch(repeatGame())}
					>
						<FontAwesomeIcon icon={faArrowRotateRight} />
					</button>
				</div>
			</div>
		</div>
	);
}

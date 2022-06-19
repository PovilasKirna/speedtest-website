import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export default function LineChart({
	selectedTime,
	rawData,
	wpmData,
	errorData,
}) {
	const labels = Array.from({ length: selectedTime }, (_, i) => i + 1);

	const options = {
		bezierCurve: true,
		responsive: true,
		maintainAspectRatio: false,
		layout: {
			padding: {
				top: 2,
			},
		},
		interaction: {
			mode: "index",
			intersect: false,
		},
		stacked: true,
		scales: {
			x: {
				axis: "x",
				ticks: {
					autoSkip: true,
					autoSkipPadding: 20,
				},
				display: true,
				title: {
					display: false,
					text: "Seconds",
				},
				grid: {
					display: true,
				},
			},
			wpm: {
				axis: "y",
				display: true,
				title: {
					display: true,
					text: "Words per Minute",
				},
				beginAtZero: true,
				min: 0,
				ticks: {
					autoSkip: true,
					autoSkipPadding: 20,
				},
				grid: {
					display: true,
				},
			},
			raw: {
				axis: "y",
				display: false,
				title: {
					display: true,
					text: "Raw Words per Minute",
				},
				beginAtZero: true,
				min: 0,
				ticks: {
					autoSkip: true,
					autoSkipPadding: 20,
				},
				grid: {
					display: false,
				},
			},
			error: {
				axis: "y",
				display: true,
				position: "right",
				title: {
					display: true,
					text: "Errors",
				},
				beginAtZero: true,
				ticks: {
					precision: 0,
					autoSkip: true,
					autoSkipPadding: 20,
				},
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: false,
		},
	};

	const data = {
		labels: labels,
		datasets: [
			{
				label: "raw",
				data: rawData,
				borderColor: "rgba(125, 125, 125, 1)",
				borderWidth: 2,
				yAxisID: "raw",
				order: 3,
				pointRadius: 2,
			},
			{
				label: "wpm",
				data: wpmData,
				borderColor: "rgba(227, 160, 8, 1)",
				borderWidth: 2,
				yAxisID: "wpm",
				order: 2,
				pointRadius: 2,
			},
			{
				label: "errors",
				data: errorData,
				borderColor: "rgba(255, 125, 125, 1)",
				pointBackgroundColor: "rgba(255, 125, 125, 1)",
				borderWidth: 2,
				order: 1,
				yAxisID: "error",
				type: "line",
				showLine: false,
				pointStyle: "crossRot",
				pointRadius: function (context) {
					const index = context.dataIndex;
					const value = context.dataset.data[index];
					return (value ?? 0) <= 0 ? 0 : 3;
				},
				pointHoverRadius: function (context) {
					const index = context.dataIndex;
					const value = context.dataset.data[index];
					return (value ?? 0) <= 0 ? 0 : 5;
				},
			},
		],
	};

	return (
		<>
			<Line data={data} options={options} />
		</>
	);
}

import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const AssignmentMark = () => {
	const data = [
		{
			name: "Page A",
			marks: 4000,
			quizs: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			marks: 3000,
			quizs: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			marks: 2000,
			quizs: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			marks: 2780,
			quizs: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			marks: 1890,
			quizs: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			marks: 2390,
			quizs: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			marks: 3490,
			quizs: 4300,
			amt: 2100,
		},
	];
	return (
		<div>
			<LineChart width={700} height={500} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="marks"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="quizs" stroke="#82ca9d" />
			</LineChart>
		</div>
	);
};

export default AssignmentMark;

import React from "react";
import Freature from "../Freature/Freature";

const PriceOption = ({ option }) => {
	const { features } = option;
	return (
		<div className="bg-indigo-300 p-3 m-5 rounded-md">
			<h2>
				<span className="text-6xl font-bold text-white">{option.price}</span>
				<span className="text-2xl text-gray-200">/mon</span>
			</h2>
			<p className="text-4xl my-4">{option.name}</p>
			{features.map((feature, idx) => (
				<Freature key={idx} feature={feature}></Freature>
			))}
			<button className="bg-white w-full mt-4 rounded-md py-2 text-slate-500 font-bold">
				Buy Now
			</button>
		</div>
	);
};

export default PriceOption;

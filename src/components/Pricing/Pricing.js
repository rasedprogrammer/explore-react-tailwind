import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
	const priceOption = [
		{
			id: 1,
			name: "Free",
			price: 0,
			features: [
				"Everything is Free",
				"Awesome Features",
				"Extra Features",
				"Amezing Features",
				"Custom Features",
			],
		},
		{
			id: 1,
			name: "Medium",
			price: 9.99,
			features: [
				"Everything is Medium",
				"Awesome Features",
				"Extra Features",
				"Amezing Features",
				"Custom Features",
			],
		},
		{
			id: 1,
			name: "Premium",
			price: 19.99,
			features: [
				"Everything is Premium",
				"Awesome Features",
				"Extra Features",
				"Amezing Features",
				"Custom Features",
			],
		},
	];
	return (
		<div>
			<h2 className="text-5xl font-bold bg-indigo-400 text-white p-12">
				Best Deal Of The Town
			</h2>
			<div className="grid md:grid-cols-3 gap-3 mt-4">
				{priceOption.map((option) => (
					<PriceOption key={option.id} option={option}></PriceOption>
				))}
			</div>
		</div>
	);
};

export default Pricing;

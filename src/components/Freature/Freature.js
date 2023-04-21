import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Freature = ({ feature }) => {
	return (
		<div className="flex items-center">
			<CheckCircleIcon className="w-6 h-6 text-white"></CheckCircleIcon>
			<p className="ml-3">{feature}</p>
		</div>
	);
};

export default Freature;

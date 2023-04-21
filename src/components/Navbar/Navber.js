import React, { useState } from "react";
import Link from "../LInk/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navber = () => {
	const [open, setOpen] = useState(false);
	const routes = [
		{ id: 1, name: "HOME", path: "/home" },
		{ id: 2, name: "PRODUCTS", path: "/porducts" },
		{ id: 3, name: "ORDERS ", path: "/orders" },
		{ id: 4, name: "CONTACTS", path: "/contacts" },
		{ id: 5, name: "ABOUT", path: "/about" },
	];
	return (
		<div>
			<nav className="bg-purple-300 w-full">
				<div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
					{open ? <XMarkIcon /> : <Bars3Icon />}
				</div>
				<ul
					className={`bg-purple-300 w-full md:flex justify-center absolute md:static duration-500 ease-in ${
						open ? "top-6" : "top-[-120px]"
					}`}
				>
					{routes.map((route) => (
						<Link key={route.id} route={route}></Link>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navber;

// {/* {open ? (
//   <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6" />
// ) : (
//   <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6" />
// )} */}

// {/* <span>{open ? "Open" : "Close"}</span> */}

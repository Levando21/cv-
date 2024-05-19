/** @format */

import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const bebra = async () => {
	return new Promise((resolve, reject) => {
		const date = new Date();
		const date2 = new Date("2004-07-27T11:45:00");
		const age = date - date2;
		const ageInYears = age / (1000 * 60 * 60 * 24 * 365.25);
		const fullAge = Math.floor(ageInYears);

		resolve(fullAge);
	});
};

bebra()
	.then((fullAge) => {
		const dateHTML = document.getElementById("cifer");
		dateHTML.textContent = `27.07.2004 (${fullAge} Jahre alt)`;
	})
	.catch((error) => {
		console.error(error);
	});

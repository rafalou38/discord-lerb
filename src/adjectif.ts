import adjectivesList from "./adjectives.json";
import { agree } from "french-adjectives";

function getRandomAdj(): string {
	let result = "";
	while (result.length < 3) {
		result = agree(
			adjectivesList[Math.floor(Math.random() * adjectivesList.length)],
			"F",
			"S"
		);
	}
	return result;
}

export default function getLerb() {
	return "Lerbé" + getRandomAdj();
}

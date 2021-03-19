// import ICommand from "wokcommands/dist/interfaces/ICommand";
import getLerb from "../adjectif";
import { ICommand } from "../types/wokcommands";

export default {
	names: "getLerb",
	description: "te donne un lerb aléatoire",

	slash: true,
	testOnly: false,
	callback: () => {
		return getLerb();
	},

	category: "lerb",
} as ICommand;

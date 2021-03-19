import Discord from "discord.js";
import { config as configEnv } from "dotenv";
import WOKCommands from "wokcommands";

configEnv();

const client = new Discord.Client();


client.on("ready", () => {
	console.log(`🤖 Logged in as ${client.user?.tag}  🚀`);

	new WOKCommands(client, {
		disabledDefaultCommands: [],
		commandsDir: "commands",
	});
});

client.login(process.env.DISCORD_TOKEN);

import { Client, GuildMember, Message, TeamMember, TextChannel } from "discord.js";
import WOKCommands from "wokcommands";
import BaseICommand from "wokcommands/dist/interfaces/ICommand";

declare interface IMember{
	user: {
			id: string,
			username: string,
			avatar: string,
			discriminator: string,
			public_flags: number
	},
	roles: string[],
	premium_since?: string,
	permissions?: string,
	pending?: boolean,
	nick?: string,
	mute: boolean,
	joined_at: string,
	is_pending: boolean,
	deaf: boolean
}

declare interface ICommand extends BaseICommand {
	callback?: (args: {
		message?: Message;
		channel: TextChannel;
		args: string[];
		text: string;
		client: Client;
		prefix: string;
		instance: WOKCommands;
		member: IMember;
	}) => (string) | Promise<string>;
}

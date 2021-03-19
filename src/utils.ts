import { Client, GuildChannel } from "discord.js";

export async function getUserById(id: string, client: Client) {
	return (
		client.users.cache.find((u) => u.id === id) ||
		(await client.users.fetch(id))
	);
}
export async function getMemberById(id: string, channel: GuildChannel) {
	return (
		channel.members.find((u) => u.id === id) ||
		(await channel.guild.members.fetch(id))
	);
}

import getLerb from "../adjectif";
import { ICommand } from "../types/wokcommands";
import { getMemberById, } from "../utils";

export default {
	names: "lerbMe",
	description: "te donne un nom aleatoire en lerb",

	slash: true,
	testOnly: false,
	callback: async ({ member: fake_member, channel }) => {
		const member = await getMemberById(fake_member.user.id, channel);

		const new_lerb = getLerb();
		if (!channel.guild?.me?.permissions.has("MANAGE_NICKNAMES")) {
			return "Je n'ai pas la permission ` MANAGE_NICKNAMES ` 😭";
		}
		if (member?.id === channel.guild?.ownerID) {
			return `Je ne peut pas changer ton pseudo car tu est l'owner du server 😭\n par contre je peut te donner un lerb: **${new_lerb}**`;
		}

		await member?.setNickname(new_lerb);
		return `ton nom est désormais: **${new_lerb}**`;
	},
	category: "lerb",
} as ICommand;

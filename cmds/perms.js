const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
	let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	if (!member) {
		member = message.member;
	}
	if (!message.guild.member(member)) {
		return message.channel.send("The mentioned user is not in this serber.")
	}
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setColor(member.displayColor)
		.setTitle(`Permissions for ${member.user.tag}`)
		.setDescription(`
**__General Permissions__**
**Admin**: ${member.permissions.has("ADMINISTRATOR") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Change Nickname**: ${member.permissions.has("CHANGE_NICKNAME") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Nicknames**: ${member.permissions.has("MANAGE_NICKNAMES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage roles**: ${member.permissions.has("MANAGE_ROLES_OR_PERMISSIONS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Webhooks**: ${member.permissions.has("MANAGE_WEBHOOKS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Emojis**: ${member.permissions.has("MANAGE_EMOJIS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**create instant invite**: ${member.permissions.has("CREATE_INSTANT_INVITE") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}	
**Manage Messages**: ${member.permissions.has("MANAGE_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Read Messages**: ${member.permissions.has("READ_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Send Messages**: ${member.permissions.has("SEND_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Send TTS Messages**: ${member.permissions.has("SEND_TTS_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Read message history**: ${member.permissions.has("READ_MESSAGE_HISTORY") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Channels**: ${member.permissions.has("MANAGE_CHANNELS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Server**: ${member.permissions.has("MANAGE_GUILD") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Kick members**: ${member.permissions.has("KICK_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}	
**ban members**: ${member.permissions.has("BAN_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Add Reactions**: ${member.permissions.has("ADD_REACTIONS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Embed Links**: ${member.permissions.has("EMBED_LINKS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Attach files **: ${member.permissions.has("ATTACH_FILES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Mention Everyone**: ${member.permissions.has("MENTION_EVERYONE") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Use External Emojis**: ${member.permissions.has("EXTERNAL_EMOJIS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}

**__Voice Permissions__**
**Cconnect**: ${member.permissions.has("CONNECT") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Speak**: ${member.permissions.has("SPEAK") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Mute Members**: ${member.permissions.has("MUTE_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Deafean Members**: ${member.permissions.has("DEAFEN_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Move Members**: ${member.permissions.has("MOVE_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Use Voice Activity**: ${member.permissions.has("USE_VAD") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}

		`)
	})
		
}

module.exports.help = {
	name: "perms"
}
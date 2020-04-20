const Discord = require("discord.js")
const keyv = require('keyv')
const botperms = new keyv('sqlite://./database/botperms.sqlite');

module.exports = {
	name: 'perms',
	aliases: ["permcheck", 'permsfor', 'perms', 'permissions', 'permissionsfor'],
	usage: 'perms <user>',
	desc: 'See a list of permissions for the specified user. They need to be a member of **this** server in order for me to do so.',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	if (!member) {
		member = message.member;
	};
	if (!message.guild.member(member)) {
		return message.channel.send(process.env.re + " The mentioned user is not in this server.")
	};
	if (!member && args.length) {
		return message.channel.send(`${process.env.re} That user is not a member of this server`)
	};
	clientGuild = client.guilds.get(process.env.supportServerId);
	if (!clientGuild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author)) {
		if (!clientGuild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author).roles.has('679469918663606313')) {
			botstaff = process.env.re;
		};
		botstaff = process.env.re;
	} else {
		botstaff = process.env.gre;
	};
	let cc;
	seg = await botperms.get('cc' + member.user.id);
	if (!seg || (seg != 'Y')) {
		cc = process.env.re;
	} else {
		cc = process.env.gre;
	};
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setTitle(`${member.user.tag}'s Permissions`)
		.setDescription(`
**__General Permissions__**
**Admin**: ${member.permissions.has("ADMINISTRATOR") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Change Nickname**: ${member.permissions.has("CHANGE_NICKNAME") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Nicknames**: ${member.permissions.has("MANAGE_NICKNAMES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Roles**: ${member.permissions.has("MANAGE_ROLES_OR_PERMISSIONS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Webhooks**: ${member.permissions.has("MANAGE_WEBHOOKS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Emojis**: ${member.permissions.has("MANAGE_EMOJIS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Create Instant Invite**: ${member.permissions.has("CREATE_INSTANT_INVITE") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}	
**Manage Messages**: ${member.permissions.has("MANAGE_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Read Messages**: ${member.permissions.has("READ_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Send Messages**: ${member.permissions.has("SEND_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Send TTS Messages**: ${member.permissions.has("SEND_TTS_MESSAGES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Read Message Mistory**: ${member.permissions.has("READ_MESSAGE_HISTORY") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Channels**: ${member.permissions.has("MANAGE_CHANNELS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Manage Server**: ${member.permissions.has("MANAGE_GUILD") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Kick Members**: ${member.permissions.has("KICK_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}	
**Ban Members**: ${member.permissions.has("BAN_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Add Reactions**: ${member.permissions.has("ADD_REACTIONS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Embed Links**: ${member.permissions.has("EMBED_LINKS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Attach Files **: ${member.permissions.has("ATTACH_FILES") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Mention Everyone**: ${member.permissions.has("MENTION_EVERYONE") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Use External Emoji**: ${member.permissions.has("EXTERNAL_EMOJIS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}

**__Voice Permissions__**
**Connect**: ${member.permissions.has("CONNECT") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Speak**: ${member.permissions.has("SPEAK") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Mute Members**: ${member.permissions.has("MUTE_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Deafean Members**: ${member.permissions.has("DEAFEN_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Move Members**: ${member.permissions.has("MOVE_MEMBERS") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}
**Use Voice Activity**: ${member.permissions.has("USE_VAD") ? "<:GreenTick:580716592980164618>" : "<:RedCrossMark:582240944863313934>"}

**__Bot Permissions__**
**Bot Staff**: ${botstaff}
**CC Permissions**: ${cc}
${member.user.id == process.env.ownerid ? "**Bot Owner:** " + process.env.gre : ""}
		`)
		.setTimestamp()
		.setFooter(`Last Checked`)
	});
	const permissions = [
		"ADMINISTRATOR",
		"CHANGE_NICKNAME",
		"MANAGE_CHANNELS",
		"MANAGE_NICKNAMES",
		"MANAGE_GUILD",
		"MANAGE_EMOJIS",
		"MANAGE_ROLES_OR_PERMISSIONS",
		"MANAGE_WEBHOOKS", 
		"READ_MESSAGES",
		"SEND_TTS_MESSAGES",
		"SEND_MESSAGES",
		"READ_MESSAGE_HISTORY",
		"EMBED_LINKS",
		"KICK_MEMBERS",
		"BAN_MEMBERS",
		"USE_VAD",
		"MUTE_MEMBERS",
		"MOVE_MEMBERS",
		"MENTION_EVERYONE",
		"SPEAK",
		"CONNECT",
		"ATTACH_FILES",
		"EXTERNAL_EMOJIS",
	];
},
};
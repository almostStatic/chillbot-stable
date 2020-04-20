const Discord = require("discord.js")
const jsonstoreclient = require('async-jsonstore-io')
const jsonstore = new jsonstoreclient('32381a85290515bf27e8f81000e0a7ab246ebdeb56db5ed9269a5851afabe20e')
const rm = require('discord.js-reaction-menu')
module.exports = {
	name:"help",
	aliases: ["helpme", 'help'],
	desc: "Get a list of usable bot commands. Along with a brief description and a lovely reaction menu.",
	usage: 'help',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let OT = await client.users.get(process.env.ownerid).tag;
		 p = prefix;
			if(!p) p = ">"
			footerText = `You can also join our **[Support server](${process.env.supportServer})**\nContact **${OT}** if you have any issues`;
		let mods = new Discord.RichEmbed()
			.setAuthor("ChillBot Help", client.user.avatarURL)
		.setDescription("```diff\n+ Everything in <> is not required\n- Everything in [] is required\n```\n\n**Page 2/4**\nUse `" + prefix + "cmd [command name]` for extra info, like a description, aliases and more!")
		
			.addField("Mod Commands", `
	\`${p}warn [@user] <reason>\` | Warns a user who is a member of the current server
	\`${p}kick [@user, or id] <reason>\` | Kicks the user from the current guild
	\`${p}slowmode [number of seconds]\` | Sets slowmode in the current channel for the amount of seconds provided. Must be less than 21600 seconds (6 Hours)
	\`${p}perms [@user or id]\` | Displays the server permissions of a given user
	\`${p}role [@uaer, or id] [@role, id, or name]\` | add/remove the mentioned role from the mentioned user
	\`${p}purge [number of messages]\` | Delete a certain number of messages from a channel
	\`${p}voice-kick [@user] <reason>\` | Kick the mentioned user (or their ID) from the voice channel they are currently in
	\`${p}warn [@user, or id] <reason>\` | Warns a specified user for a certain reason
	\`${p}setnick [@user or id] [new nickname]\` | change the nickname of a server member
	\`${p}ban [@user] <reason>\` | Bans a user from th current guild
	\`${p}bans\` | See the banned users in the guild and the reasons of their ban
		`)
		.addField("Mod Commands (1024 char limit :/)", `
			\`${p}setprefix [new prefix]\` | Changes the prefix for the current server. If you have forgotten (or need help regarding your server's prefix, join our [support server](${process.env.supportServer}))
			\`${p}roleinfo [@role, rolename or roleid]\` | Displays information about a certain role, including members and display color
			\`${p}rolecolor [hex color] [@role, name or ID]\` | Changes the color of a specified role
		`)
	.setColor(jsonColor)
	.addField("Support", footerText)
		.setFooter("Commands do not work in DMs", client.user.avatarURL)
		.setTimestamp()

		let devCmds = new Discord.RichEmbed()
		.setColor('#ff0000')
			.setAuthor("ChillBot Help", client.user.avatarURL)
		.setDescription("```diff\n+ Everything in <> is not required\n- Everything in [] is required\n```\n\n**Page 4/4**\nUse `" + prefix + "cmd [command name]` for extra info, like a description, aliases and more!")
			.addField(`DEVELOPER`, `
	\`${p}docs [search term]\` | Search the discord.js docs 
	\`${p}npm [package name]\` | Search [npmjs](https://npmjs.org/) for any given package, Please ensure they are **URL Encoded**
	\`${p}guilds\` | view all the servers the bot is in
	\`${p}guildids\` | see the ids of bot guilds (devs only)
	\`${prefix}blacklist [PING or ID]\` | Blacklist someone for using ChillBot (devs only)
	\`${prefix}whitelist\` | Whitelist someone from using ChillBot (opposite to blacklisting someone, devs only)
	\`${p}getinv [guildID]\` | get an invite for the guild id you provided, bot must have sent one message and have create invites permission (devs only)
		`)
	.addField("Support", footerText)
		.setFooter("Commands do not work in DMs", client.user.avatarURL)
		.setTimestamp()


		let cmds = new Discord.RichEmbed()
		.setColor(jsonColor)
		.setAuthor("ChillBot Help", client.user.avatarURL)
	.setDescription("```diff\n+ Everything in <> is not required\n- Everything in [] is required\n```\n\n**Page 1/4**\nUse `" + prefix + "cmd [command name]` for extra info, like a description, aliases and more!")
		.addField("Commands", `
	\`${prefix}cookie [person to donate]\` | Send a cookie someone's way. This can be done to anything (so you could use \`${prefix}cookie himself\`)
	\`${prefix}cat\` | Random cat :cat:
	\`${p}checkinv [invite link]\` | Get the bot to display information about a certain invite link; the link must be valid
	\`${p}8ball [question]\` | Ask the bot a question and get its response (credit to [danielpmc](https://github.com/danielpmc))
	\`${p}serverinfo\` | Display server information
	\`${p}userinfo [@user, or id]\` | Displays some basic user information
	\`${p}botinfo\` | Displays basic bot information
	\`${p}meme\` | Gets the bot to display a random meme found on reddit
	\`${p}membercount\` | Get the total number of members and bots in the current server
	\`${p}uptime\` | See how long that bot has been online for!
	\`${p}say [TYPE] [message]\` | get the bot to say something. Replace \`TYPE\` with either \`embed\` (for an embed) or \`text\` for a normal message
	`)
	.addField("Commands (1024 char limit :/)", `
	\`${prefix}hug [@user]\` | Hug someone
	\`${p}setcolor [hex color code]\` | set your embed color preference (the coloured strip next to them fancy messages)
	\`${prefix}snipe\` | See the last deleted message in the channel (the bot must have been in the server when the message was deleted)
	\`${prefix}love [@user]\` | See how much someone sle (the person you pinged) loves you!
	\`${prefix}fortnite [USER] [PLATFORM]\` | See someone's fortnite stats, Replace \`[PLATFORM]\` to either \`xb1\`, \`psn\`, or \`pc\` (defaults to pc)
	\`${prefix}pee <@user/ID>\` | Pee on someone, there is a 5 second cooldown
	\`${prefix}editsnipe\` | View the last editted message in the current channel
	`)
		.addField("Support", footerText)
		.setFooter("Commands do not work in DMs", client.user.avatarURL)
		.setTimestamp()
	let beta = new Discord.RichEmbed()
		.setAuthor("ChillBot Help", client.user.avatarURL)
	.setDescription("```diff\n+ Everything in <> is not required\n- Everything in [] is required\n```\n\n**Page 3/4**\nUse `" + prefix + "cmd [command name]` for extra info, like a description, aliases and more!")
	.setColor(jsonColor)
	.addField("BETA", `
	\`${p}setlogs [#channel or id]\` | set the preferred log channel of the specified server
	[Report Bug](https://chillbot.asad.codes/reportbug)
	`)
		.addField("Support", footerText)
	.setFooter("Commands do not work in DMs", client.user.avatarURL)
	.setTimestamp()

		
		new rm.menu(message.channel, message.author.id, [cmds, mods, beta, devCmds], 120000, reactions = {first: '⏪', back: '◀', next: '▶', last: '⏩', stop: '⏹'});
}
}
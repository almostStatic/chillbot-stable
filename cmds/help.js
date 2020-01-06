const Discord = require("discord.js")

module.exports.run = async(client, message, args, error, getSupport, green, red) => {
	let help = new Discord.RichEmbed()
	.setColor(message.guild.me.displayColor)
	.setTitle("ChillBot Help")
.addField("Info", "```diff\n+ Everything in <> is not required\n- Everything in [] is required\n```")
	.addField("MODERATION COMMANDS", `
\`>warn [@user] <reason>\` | Warns a user who is a member of the current server - requires the **manage messages** permission! Warnings are not logged and practically mean nothing which is why anyone in the server can be warned
\`>kick [@user, or id] <reason>\` | Kicks the user from the current guild
\`>slowmode [number of seconds]\` | Sets slowmode in the current channel for the amount of seconds provided. Must be less than 21600 seconds (6 Hours)
\`>role [@uaer, or id] [@role, id, or name]\` | add/remove the mentioned role from the mentioned user
\`>purge [number of messages]\` | Delete a certain number of messages from a channel, must be **less** than 101
\`>voice-kick [@user] <reason>\` | Kick the mentioned user (or their ID) from the voice channel they are currently in
\`>warn [@user, or id] <reason>\` | Warns a specified user for a certain reason
\`>ban [@user] <reason>\` | Bans a user from th current guild | BAN MEMBERS
\`>bans\` | See the banned users in the guild and the reasons of their ban
	`)
	.addField("EXTRAS", `
\`>8ball [question]\` | Ask the bot a question and get its response (credit to [danielpmc](https://github.com/danielpmc))
\`>serverinfo\` | Display server information
\`>userinfo [@user, or id]\` | Displays some basic user information
\`>botinfo\` | Displays basic bot information
\`>meme\` | Gets the bot to display a random meme found on reddit
\`>invite\` | Get the bot to send you his invite and a link to his support server
\`>membecount\` | Get the total number of members and bots in the current server
\`>uptime\` | See how long that bot has been online for!
`)
	.addField(`DEVELOPER`, `
\`>docs [search term]\` | Search the discord.js docs 
	`)
.addField("Support", `You may join our **[Support server](${process.env.supportServer})**\nThe bot owner is: \`static#0772\``)
	.setFooter("Commands do not work in DMs", client.user.avatarURL)
	.setTimestamp()
const msg = await message.channel.send("Check your DMs!")
	message.author.send(help)
		.catch(() => {
			msg.edit("I couldn't DM you", { embed: help })
		})
};

module.exports.help = {
	name: 'help',
};
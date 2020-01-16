const Discord = require("discord.js")
const jsonstoreclient = require('async-jsonstore-io')
const jsonstore = new jsonstoreclient('32381a85290515bf27e8f81000e0a7ab246ebdeb56db5ed9269a5851afabe20e')

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) =>{
	let p = prefix;	
	let help = new Discord.RichEmbed()
	.setColor(jsonColor)
	.setTitle("ChillBot Help")
.addField("Info", "```diff\n+ Everything in <> is not required\n- Everything in [] is required\n```")
	.addField("MODERATION COMMANDS", `
\`${p}warn [@user] <reason>\` | Warns a user who is a member of the current server - requires the **manage messages** permission! Warnings are not logged and practically mean nothing which is why anyone in the server can be warned
\`${p}kick [@user, or id] <reason>\` | Kicks the user from the current guild
\`${p}slowmode [number of seconds]\` | Sets slowmode in the current channel for the amount of seconds provided. Must be less than 21600 seconds (6 Hours)
${p}perms [@user or id]\` | Displays the server permissions of a given user
\`${p}role [@uaer, or id] [@role, id, or name]\` | add/remove the mentioned role from the mentioned user
\`${p}purge [number of messages]\` | Delete a certain number of messages from a channel
	`)
	
	.addField('EXTRA MOD COMMANDS', `
\`${p}voice-kick [@user] <reason>\` | Kick the mentioned user (or their ID) from the voice channel they are currently in
\`${p}warn [@user, or id] <reason>\` | Warns a specified user for a certain reason
\`${p}ban [@user] <reason>\` | Bans a user from th current guild | BAN MEMBERS
\`${p}bans\` | See the banned users in the guild and the reasons of their ban
	`)
	.addField("EXTRAS", `
\`${p}updates\` | See the most recent updates to the bot
\`${p}checkinv [invite link]\` | Get the bot to display information about a certain invite link; the link must be valid
\`${p}8ball [question]\` | Ask the bot a question and get its response (credit to [danielpmc](https://github.com/danielpmc))
\`${p}serverinfo\` | Display server information
\`${p}userinfo [@user, or id]\` | Displays some basic user information
\`${p}botinfo\` | Displays basic bot information
\`${p}meme\` | Gets the bot to display a random meme found on reddit
\`${p}invite\` | Get the bot to send you his invite and a link to his support server
\`${p}membecount\` | Get the total number of members and bots in the current server
\`${p}uptime\` | See how long that bot has been online for!
`)
	.addField(`DEVELOPER`, `
\`${p}docs [search term]\` | Search the discord.js docs 
\`${p}npm [package name]\` | Search [npmjs](https://npmjs.org/) for ang given package, Please ensure they are **URL Encoded**
\`${p}updates\` | View the bot's changelog	
	`)
.addField("BETA", `
\`${p}setcolor [hex color code]\` | set your embed color preference (the coloured strip next to them fancy messages)
\`${p}resetcolor\` | reset your personal color preference (to the default; which is the color of your highest role)

[Report Bug](https://chillbot.asad.codes/reportbug)
`)
.addField("Support", `You may join our **[Support server](${process.env.supportServer})**\nThe bot owner is: \`static#7894\``)
	.setFooter("Commands do not work in DMs", client.user.avatarURL)
	.setTimestamp()
const msg = await message.channel.send(`${process.env.gre} You have mail!`)
	message.author.send(help)
		.catch(() => {
			msg.edit("I couldn't DM you", { embed: help })
		})
};

module.exports.help = {
	name: 'help',
};
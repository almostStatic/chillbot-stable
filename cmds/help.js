const Discord = require("discord.js")

module.exports.run = async(client, message, args, error, getSupport, green, red) => {
	let help = new Discord.RichEmbed()
	.setTitle("ChillBot Help")
	.addField("MODERATION COMMANDS", `
\`>voice-kick [@user] [reason]\` | Kick the mentioned user (or their ID) from the voice channel they are currently in. You need the 
\`>warn [@user, or id] [reason]\` | Warns a specified user for a certain reason
\`>ban [@user] [reason]\` | Bans a user from th current guild | BAN MEMBERS
 THE REST OF THIS IS NOT FINISHED YET.
	`)
	
	message.author.send({ help })
		.catch(() => {
			message.channel.send({ help })
		})
};

module.exports.help = {
	name: 'help',
};
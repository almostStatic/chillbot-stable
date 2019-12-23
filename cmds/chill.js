const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
	message.channel.send(`**${message.author.tag}** is chilling with **ChillBot**!!`)
		.then(async msg => {
			await msg.react('580716592980164618')
		})
}

module.exports.help = {
	name: "chill"
}
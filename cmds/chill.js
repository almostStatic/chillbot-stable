const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
	message.channel.send(`:cool: **${message.author.tag}** is chilling with **ChillBot**!! :cool:`)
		.then(async msg => {
			await msg.react('580716592980164618')
		})
}

module.exports.help = {
	name: "chill"
}
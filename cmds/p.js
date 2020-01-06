const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
	message.channel.send(`${message.client.pings}`)
}

module.exports.help = {
	name: "cp"
}
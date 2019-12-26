const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
	const msg = await message.channel.send("react with thumbsup")
	
}

module.exports.help = {
	name: "r"
}
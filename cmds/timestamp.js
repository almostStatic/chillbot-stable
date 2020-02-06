const Discord = require('discord.js')

module.exports = {
	name: "timestamp",
	aliases: [],
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(message.createdTimestamp)
	})
}
}

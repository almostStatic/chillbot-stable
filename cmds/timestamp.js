const Discord = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(message.createdTimestamp)
	})
}

module.exports.help = {
	name: 'timestamp'
}
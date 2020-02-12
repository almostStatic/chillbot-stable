const Discord = require('discord.js')

module.exports = {
	name: "timestamp",
	aliases: ['timestamp'],
	desc: 'See the current timestamp.',
	usage: 'timestamp',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(message.createdTimestamp)
	})
}
}

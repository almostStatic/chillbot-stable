const Discord = require("discord.js")

module.exports = {
	name: "membercount",
	aliases: ["members"],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle(message.guild.name)
		.addField("\> Humans", message.guild.members.filter(e=>!e.user.bot).size, true)
		.addField("\> Bots", message.guild.members.filter(e=>e.user.bot).size, true)
		.addField("\> Total", message.guild.memberCount, true)
		.setColor(jsonColor)
	})
}
}
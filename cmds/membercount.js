const Discord = require("discord.js")

module.exports = {
	name: "membercount",
	aliases: ["members", 'membercount'],
	desc: "Gets the total members of a server and seperates them out; bot count, human count, etc, etc.",
	usage: 'membercount',
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
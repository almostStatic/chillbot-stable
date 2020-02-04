const Discord = require("discord.js")
module.exports.run = async (client,message,args,prefix,jsonColor,sleep,done,error) => {
	message.channel.send(``, {
		embed: new Discord.RichEmbed()
		.serDescription(`:cool: **${message.author.tag}** is chilling with **ChillBot**!! :cool:`)
		.setColor(jsonColor)
	})
		.then(async msg => {
			await msg.react('580716592980164618')
		})
}

module.exports.help = {
	name: "chill"
}
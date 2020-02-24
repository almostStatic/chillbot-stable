const Discord = require("discord.js")
module.exports = {
	name: "chill",
	aliases: ["chill"],
	desc: process.env.gre + " Take a chill pill",
	usage: "chill",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	message.channel.send(``, {
		embed: new Discord.RichEmbed()
		.setDescription(`${message.author.tag} has taken a :pill: which has restored :sunglasses: 10000000000000000000 as well as :heart: 10000000000000000000, reaching maximum chillness in the process!`)
		.setColor(jsonColor)
	})
	},
};
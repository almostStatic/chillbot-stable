const Discord = require("discord.js")
module.exports = {
	name: "chill",
	aliases: ["chill"],
	desc: process.env.gre + "Chil with ChillBot!",
	usage: "chill",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	message.channel.send(``, {
		embed: new Discord.RichEmbed()
		.serDescription(`:cool: **${message.author.tag}** is chilling with **ChillBot**!! :cool:`)
		.setColor(jsonColor)
	})
		.then(async msg => {
			await msg.react('580716592980164618')
		});
	},
};
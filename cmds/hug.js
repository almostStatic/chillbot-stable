const Discord = require('discord.js');

module.exports = {
	name: 'hug',
	aliases: ['hug'],
	usage: 'hug <user>',
	desc: 'Hug a user! Why not show them some :sparkling_heart:',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let u = message.mentions.members.first();
		if (!u) {
			return message.channel.send("You need to mention someone for this command to work!")
		} else if (u) {
			if (u.user.id === message.author.id) {
	return		message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`${message.author.tag} has hugged themself`)
			})
			}
			message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`${message.author.tag} has hugged ${u.user.tag}`)
			})
		}
	},
}
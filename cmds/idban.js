const Discord = require('discord.js')
module.exports = {
	name: "idban",
	aliases: [],
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	if(!message.guild.me.permissions.has('BAN_MEMBERS')) {
		return message.channel.send(`${process.env.re} **${message.author.username}**, I need the ban members permission to ban members!`)
	}
	if(!message.member.permissions.has('BAN_MEMBERS')) {
		return msg.edit(`${process.env.re} You need the ban members permission to use this command!`)
	}
	let id = args[0];
	let reason = args.slice(1).join(' ')
	if(!reason) reason = 'no reason given'
	message.guild.ban(id, reason)
		.catch((err) => {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription("The user is already banned from this server or you did not provide a valid user ID")
				.setTitle("Support")
				.setURL(process.env.supportServer)
			})
		})
	},
}
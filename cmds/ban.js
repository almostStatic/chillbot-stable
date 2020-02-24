const Discord = require("discord.js");
module.exports = {
	name: "ban",
	aliases: ["banish", 'ban'],
	desc: 'Ban a user from the server\nBots cannot be banned, as when they are re-invited discord just unbans them.\nTo remove/ban bots, use the kick command.',
	usage: 'ban <user> [reason]',
 async run(client,message,args,prefix,jsonColor,logs,sleep,done,error) {
	 return message.reply('this command is being re-written. check back later')
	 message.delete().catch((e) => {});
	 let bannedUser = message.guild.member(message.guild.members.get(args[0]) || message.mentions.users.first());
	 
	 if (!args[0]) return message.channel.send(`${process.env.re} You need to provide someone to ban!`)

	 if (!bannedUser) return message.channel.send(`${process.env.re} That user is not a member of the server!`)
	},
}
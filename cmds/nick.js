const Discord = require("discord.js")
let mom = require('moment')

module.exports = {
	name: "nick",
	aliases: ["nick", "setnick", "set-nick", "set-nickname"],
	usage: 'nick <user> <new nickname>',
	desc: 'Sets the nickname of a given user. Note that I cannot change people\'s nicknames who are above me as I will not have the correct permissions to do so',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let msg = await message.channel.send(`One moment...`)
	if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) {
		return msg.edit(`${process.env.re} I need the **MANAGE_NICKNAMES** permission to do this!`)
	}
	let userArg = args[0]
	if (!userArg) {
		return msg.edit(`${process.env.re} You need to mention a user or provide a valid user id!`)
	}
		function getUserFromMention(mention) {
			if (!mention) return;
			if (mention.startsWith('<@') && mention.endsWith('>')) {
					mention = mention.slice(2, -1);
					if (mention.startsWith('!')) {
							mention = mention.slice(1);
					};
					return client.users.get(mention);
			};
		};
	if (!args[0]) return message.channel.send('You need to provide a user to update, either by ID or @mention')
	let usr =  message.guild.member(getUserFromMention(args[0]));
	if (!usr) usr = message.guild.member(message.guild.members.get(args[0]));	
	let nick = args.slice(1).join(' ')

	message.guild.member(usr) 
		.setNickname(nick, `Responsible User: ${message.author.tag} (${message.author.id}), Nickname changed at: ${mom(Date.now())}`)
			.catch(er => {
				msg.edit(`${process.env.re} I do not have permission to change the nickname of that user!`)
				return;
			})
	msg.edit(`${process.env.gre} I have changed **${usr.user.tag}**\'s nickname to **${nick}**!\n\n> Remember nicknames cannot be longre than 32 characters!!`)
}
}
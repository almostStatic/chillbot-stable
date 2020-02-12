const Discord = require('discord.js')
module.exports = {
	name: "idban",
	aliases: ["idban"],
	usage: "idban <user-id> [reason]",
	desc: 'Ban a user by ID who is not in the server, ie caused havok and left thinking they wouldn\'t get punished :smile: We\'re here to help with that! Got their ID? Use the idban command',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	if(!message.guild.me.permissions.has('BAN_MEMBERS')) {
		return message.channel.send(`${process.env.re} **${message.author.username}**, I need the ban members permission to ban members!`)
	}
	if(!message.member.permissions.has('BAN_MEMBERS')) {
		return msg.edit(`${process.env.re} You need the ban members permission to use this command!`)
	}
	let id = args[0];
	let tag = await client.fetchUser(id)
		.catch((e) => {
			return message.channel.send(`${process.env.re} You did not provide a valid user ID.`)
		})
	let TAG = `${tag.username}#${tag.discriminator}`;
	let ID = tag.id;
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
		message.channel.send(`${process.env.gre} ${TAG} (${ID}) was banned`, {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setDescription(`**Reason** ${reason}`)
		})
	},
}
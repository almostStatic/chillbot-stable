const Discord = require('discord.js')
const fs = require('fs')
//const warns = fs.readFileSync("./warns.json", "utf-8");
const Moment = require("moment")

module.exports.run = async(client, message, args, green, red) => {
	let msg = await message.channel.send("Fetching user...")
	if (!message.member.permissions.has("MANAGE_MESSAGES")) {
		return msg.edit('You need the **manage messages** permision in order to use this command!')
	}
	let userArg = args[0]
	let reason = args.slice(1).join(" ")
	if (!userArg) {
		return msg.edit(`${process.env.re} You need to provide a user to warn!`)
	}
	msg.edit('Parsing arguements...')
	if (!reason) {
		reason = "no reason given"
	};

	let guildMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(userArg));

	if (!guildMember) {
		return msg.edit(`${process.env.re} That user is not a member of this server!`)
	}
	let rembed = new Discord.RichEmbed()
	.setDescription(`**Reason:** ${reason}`)
	.setColor(message.member.displayColor)

	guildMember.send(`You were warned in **${message.guild.name}** by **${message.author.tag}**`, { embed: rembed })
	msg.edit(`${process.env.gre} **${guildMember.user.tag}** has been warned`, {embed: rembed})
};

module.exports.help = {
	name: 'warn'
};
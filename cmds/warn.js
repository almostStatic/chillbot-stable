const Discord = require('discord.js')
const fs = require('fs')
const Moment = require("moment")
const json = require('async-jsonstore-io')
let jsonstore = new json(process.env.jstk)

module.exports.run = async(client,message,args,prefix,jsonColor,warns,sleep,done,error) => {
	
	message.delete().catch(err => {})
	let msg = await message.channel.send("Warning...")
	if (!message.member.permissions.has("MANAGE_MESSAGES")) {
		return msg.edit(process.env.re+' You need the **manage messages** permision in order to use this command!')
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

	let guildMember = message.guild.member(message.guild.members.get(userArg) || message.mentions.users.first());

	if (!guildMember) {
		return msg.edit(`${process.env.re} That user is not a member of this server!`)
	}

		/*var warns = jsonstore.get('warns' + guildMember.id)
			.catch((e) => {
				if(e.code == 404) {

				};
			}); */
	//let newWarn = await jsonstore.send('warns' + guildMember.id, warns + 1)
	//	if(!warns) newWarn = '0';
	let rembed = new Discord.RichEmbed()
	.setDescription(`**Reason:** ${reason}`)
	.setColor(jsonColor)
//	.setFooter("Number of warns: " + warns)

	guildMember.send(`You were warned in **${message.guild.name}** by **${message.author.tag}**`, { embed: rembed })
	 msg.edit(`${process.env.gre} **${guildMember.user.tag}** has been warned`, {embed: rembed})
};

module.exports.help = {
	name: 'warn'
};
const Discord = require('discord.js')
const fs = require('fs')
const moment = require("moment")
const keyv = require('keyv')
const logs = new keyv('sqlite://./database/log.sqlite')

module.exports = {
	name: "warn",
	aliases: ['warn'],
	desc: 'Warns a user in the current server',
	usage: 'warn <@user/ID> [optional reason]',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
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
	message.delete().catch(err => {})
	let msg = await message.channel.send(process.env.loading + " Working...")
	if (!message.member.permissions.has("MANAGE_MESSAGES")) {
		return msg.edit(process.env.re+' You need the **manage messages** permision in order to use this command!')
	}
	let userArg = args[0];
	let reason = args.slice(1).join(" ")
	if (!userArg) {
		return msg.edit(`${process.env.re} You need to provide a user to warn!`)
	}
	if (!reason) {
		reason = "no reason given"
	};
	let guildMember = message.guild.member(getUserFromMention(args[0]));
	if (!guildMember) {
		guildMember = message.guild.member(message.guild.members.get(args[0]))
	}

	if (!guildMember) {
		return msg.edit(`${process.env.re} I can't find that user!`)
	};
	
	let rembed = new Discord.RichEmbed()
	.setDescription(`**Reason:** ${reason}`)
	.setColor(jsonColor)
//	.setFooter("Number of warns: " + warns)

	data = await logs.get('logs' + message.guild.id);
	if (data) {
		message.guild.channels.get(data).send({
			embed: new Discord.RichEmbed()
			.setAuthor(`Member Warned`, message.guild.iconURL)
			.setColor("#da0000")
			.setThumbnail(guildMember.user.avatarURL)
			.addField("❯ Member", guildMember.user.tag, true)
			.addField("❯ Moderator", message.author.tag, true)
			.addField('❯ Channel', message.channel, true)
			.addField("❯ Warned At", `${moment.utc(message.createdAt).format('hh:mm:ss DD/MM/YYYY')} (**UTC**)`, true)
			.addField(" Reason", reason)
			.setFooter("ID: " + guildMember.id, guildMember.user.avatarURL)}).catch((err) => { });
	};
	guildMember.send(`You were warned in **${message.guild.name}** by **${message.author.tag}**`, { embed: rembed })
	 msg.edit(`${process.env.gre} **${guildMember.user.tag}** has been warned`, {embed: rembed});
	 }
	}
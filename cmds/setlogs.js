const Discord = require('discord.js')
let json = require('async-jsonstore-io')
let jsonstore = new json(process.env.jstk)
let keyv = require('keyv');
let LOGS_DB = new keyv("sqlite://./database/log.sqlite")

module.exports = {
	name: 'setlogs',
	aliases: ['setlogs'],
	usage: 'setlogs <channel mention, name or ID',
	desc: 'Set the logs channel for the server where mod actions, message deletes and edits will be logged',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	if(!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send(`${process.env.re} You do not have permission to set/edit logs channel of this server!`)
	let msg = await message.channel.send("Setting logs channel...")
	let channelArgs = args[0];
	if(!channelArgs) { return message.channel.send(`${process.env.re} To change the logs channel, you need to provide a channel! \n\n> This could be the name of the channel, the ID or the channel #mention!`, {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(`The current log channel is <#${logs}> !`)
		});
	 };
	let channel = message.mentions.channels.first() || message.guild.channels.find(ch => ch.name == channelArgs) || message.guild.channels.find(ch => ch.id == channelArgs);
	if (channel.type == "voice") {
		return msg.edit(`${process.env.re} It cannot be a voice channel`)
	}

	let newLogs = await LOGS_DB.set("logs" + message.author.id, channel.id)

	await channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle('Logs Channel Update')
		.setColor(jsonColor)
		.addField("❯ Updated By", message.author.tag, true)
		.addField("❯ Updated At", message.createdAt.toDateString(), true)
		.addField("❯ Updated To", `<#${channel.id}>`)
	})

	msg.edit("", {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(`${process.env.gre} **${message.author.tag}** has successfully updated the server's log channel to <#${channel.id}>!`)
	});
}
}
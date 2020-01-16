const Discord = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	let msg = await message.channel.send(`Softbanning...`)
	if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
		return msg.edit(`${process.env.re} I need the Ban Members permission for this command to work!\nYou can use the \`>permcheck \``)
	}
	let userArg = args[0];
	let reason = args.slice(1).join(' ') || 'no reason given'
	if (!userArg) { return msg.edit(`${process.env.re} You need to provide a user to softban!`) }
	let guildMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(userArg));
	if (!guildMember) { return msg.edit(`${process.env.re} That user is no longer a member of this guild!`) }
	if(!guildMember.managable) {
		return msg.edit('cant do this to that user')
	}
	let logCh = message.guild.channels.find(ch => ch.name == 'logs') || message.channel;
	guildMember.send(`You were softbanned in **${message.guild.name}** by **${message.author.tag}**`, {
		embed: new Discord.RichEmbed()
		.setDescription(`**Reason**: ${reason}`)
		.setColor(jsonColor)
	})
	message.guild.ban(guildMember, 7, `Responsible user: ${message.author.tag}`)
		.then(async(personWhoGotBannedF) => {
			await message.guild.unban(personWhoGotBannedF.user.id, `Softban Unban\nResponsible user: ${message.author.tag}`)
		})
			.catch((err) => {
				return msg.edit("", {
					embed: new Discord.RichEmbed()
					.setColor(jsonColor)
					.setDescription(`${process.env.re} Sorry, there was an error! Please [get help here](${process.env.supportServer}) and report the following error:\n\`\`\`xl\n${err}\n\`\`\``)
				})
			});
		logChMsg = await logCh.send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Action: Softban -> " + guildMember.user.tag)
		.addField("\> Member", guildMember.user.tag + ' | ' + guildMember.user.id)
		.addField("\> Softbanned At", message.createdAt.toDateString())
		.addField("\> Channel", message.channel)
		.addField("\> Reason", reason)
		.setColor([255, 156, 0])
	})

	msg.edit(`${process.env.gre} **${guildMember.user.tag}** was softbanned`, {
		embed: new Discord.RichEmbed()
		.setDescription(`**Reason:** ${reaosn}`)
		.setColor(message.member.displayColor)
	});
};

module.exports.help = {
	name: 'softban',
};
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
	let msg = await message.channel.send(`Processing... **Please wait!**`)
	let userArg = args[0];
	let reason = args.slice(1).join(" ")
	if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
		return msg.edit(`${process.env.re} I do not have permission to kick members!`)
	}
	if (!message.member.permissions.has("KICK_MEMBERS")) {
		return msg.edit(`${process.env.re} You do not have permission to use this command!`)
	}
	if (!reason) {
		msg.edit(":warning: **You did not provide a reason therefore it will be undefined.**")
		reason = "No reason given"
	}

	if (!userArg) {
		return msg.edit(`${process.env.re} You need to provide a user to kick!`)
	}

	let guildMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(userArg));
	let logs = message.guild.channels.find(ch => ch.name == "logs") || message.channel;
	guildMember.send(`You were kicked from **${message.guild.name}** by **${message.author.tag}**`, {
		embed: new Discord.RichEmbed()
		.setDescription(`**Reason**: ${reason}`)
		.setColor(message.member.displayColor)
	})
	let log = await logs.send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Member Kicked")
		.addField("> Kicked Member", guildMember.user.tag, true)
		.addField("> Moderator", message.author.tag, true)
		.addField("> Kicked At", message.createdAt.toDateString())
		.addField("> Reason", reason)
		.setFooter(`ID: ${guildMember.user.id}`)
		.setTimestamp()
		.setThumbnail(guildMember.user.avatarURL)
		.setColor([255, 156, 0])
	})
	if(guildMember.permissions.has("MANAGE_GUILD")) {
		return msg.edit(`${process.env.re} This user is mod/admin.`)
	}
	message.guild.member(guildMember).kick(`Responsible User: ${message.author.tag}\nDetails: ${log.url}`)
	msg.edit(`${process.env.gre} **${guildMember.user.tag}** was kicked!`, {
		embed: new Discord.RichEmbed()
		.setDescription(`**Reason**: ${reason}`)
		.setColor(message.member.displayColor)
	})
};

module.exports.help = {
	name: "kick",
};
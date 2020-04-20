const Discord = require('discord.js');

module.exports = {
	name: 'unmute',
	aliases: ["unmute"],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		if (!message.member.permissions.has('MANAGE_GUILD')) {
			return message.channel.send(`${process.env.re} You cannot use this command! You need the manage server permission in order to use this command!`)
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
	if (!args[0]) return message.channel.send('You need to provide a user to unmute, either by ID or @mention')
	let usr =  message.guild.member(getUserFromMention(args[0]));
	if (!usr) usr = message.guild.member(message.guild.members.get(args[0]));
		let reason = args.slice(1).join(' ');
		if (!reason) reason = "no reason given";

		if (!usr) return message.reply(process.env.re + " I cannot find that user!")
		let mute = message.guild.roles.find(r => r.name.toLowerCase() == 'muted');
		if (!mute) return message.channel.send(`${process.env.re} I cannot find the "muted" role.`)
		if (!usr.roles.has(mute.id)) {
			return message.channel.send(`${process.env.re} I can't unmute **${usr.user.tag}**, they aren't muted`)
		};
		usr.removeRole(mute.id, `User Unmuted By: ${message.author.tag} because of "${reason}"`)
		message.channel.send(`${process.env.gre} **${usr.user.tag}** was unmuted`, {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setDescription(`**Reason**: ${reason}`)
		})
		usr.send("", {
			embed: new Discord.RichEmbed()
			.setColor("GREEN")
			.setDescription(`You have been unmuted from **${message.guild.name}**`)
			.addField("Moderator", message.author.tag, true)
			.addField("Reason", reason, true)
		})
	},
}
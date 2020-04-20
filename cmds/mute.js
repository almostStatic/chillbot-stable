const Discord = require('discord.js');
const keyv = require('keyv')
const db = new keyv('sqlite://./database/log.sqlite');

module.exports = {
	name: 'mute',
	aliases: ["mute"],
	usage: 'mute <@user/ID> [reason]',
	desc: "Mutes a user, preventing them from sending messages. This might not always prevent users from sending messages if you've configured channel specific permissions incorrectly",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		message.delete(3000).catch((error) => { });
		if (!message.guild.me.permissions.has('MANAGE_ROLES')) {
			return message.channel.send(`I need the manage roles permission in order to add the muted role`)
		};
		if (!message.member.permissions.has('MANAGE_GUILD')) {
			return message.channel.send(`${process.env.re} You need the manage server permission in order to use this command!`)
		};
		let muterole = message.guild.roles.find(x => x.name.toLowerCase() == 'muted') || message.guild.roles.find(x => x.name.toLowerCase().startsWith('mute')) || message.guild.roles.find(x => x.name.toLowerCase().endsWith('muted'));
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
		if (!args[0]) return message.channel.send('You need to provide a user to kick, either by ID or @mention')
		let usr =  message.guild.member(getUserFromMention(args[0]));
		if (!usr) usr = message.guild.member(message.guild.members.get(args[0]));
		let reason = args.slice(1).join(' ');
		if (!reason) reason = '[Moderator didn\'t give a reason]'
		if (usr.roles.has(muterole.id)) {
			return message.channel.send(
				`${usr.user.tag} is **already** muted (They have the ${muterole.name} role)`
			)
		}
		usr.addRole(muterole.id);
		message.channel.send(`${process.env.gre} **${usr.user.tag}** has been muted`, {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setDescription(`**Reason:** ${reason}`)
		});
		usr.send(`You were muted in **${message.guild.name}** by **${message.author.tag}**`, {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setDescription(`**Reason:** ${reason}`)
		})
			.catch((e) => {
				message.chanel.send(`${usr.user.tag} has their DMs locked-they weren't sent the notification...`)
			})
	},
}
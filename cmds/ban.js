const Discord = require("discord.js");
const keyv = require('keyv');

module.exports = {
	name: "ban",
	aliases: [ 'ban'],
	desc: 'Ban a user from the server\nBots cannot be banned, as when they are re-invited discord just unbans them.\nTo remove/ban bots, use the kick command.',
	usage: 'ban <user> [reason]',
 async run(client,message,args,prefix,jsonColor,logs,sleep,done,error) {
	 if (!message.member.permissions.has('BAN_MEMBERS')) {
		 return message.channel.send(`${process.env.re} You need the ban members permission to use this command!`)
	 };
	 if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
		 return message.channel.send(`${process.env.re} I need the ban members permission for this command to work!`)
	 };
	 message.delete().catch((e) => {});
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
		if (!args[0]) return message.channel.send('You need to provide a user to ban, either by ID or @mention')
		let usr =  message.guild.member(getUserFromMention(args[0]));
		let reason = args.slice(1).join(' ');
		if (!reason) reason = 'no reason given'
		if (!usr) usr = message.guild.member(message.guild.members.get(args[0]));
		if (usr.permissions.has('BAN_MEMBERS')) {
			return message.channel.send(`You can't ban ${usr.user.tag}`)
		};
	data = await client.db.get('logs' + message.guild.id);
	if (data) {
		message.guild.channels.get(data).send({
			embed: new Discord.RichEmbed()
			.setAuthor(`Member Banned`, message.guild.iconURL)
			.setColor("#da0000")
			.setThumbnail(usr.user.avatarURL)
			.addField("❯ Member", usr.user.tag, true)
			.addField("❯ Moderator", message.author.tag, true)
			.addField('❯ Channel', message.channel, true)
			.addField("❯ Banned At", `${moment.utc(message.createdAt).format('hh:mm:ss DD/MM/YYYY')} (**UTC**)`, true)
			.addField(" Reason", reason)
			.setFooter("ID: " + usr.id, usr.user.avatarURL)}).catch((err) => { });
	};		
		message.guild.member(usr)
			.send(`You were banned from **${message.guild.name}** by ${message.author.tag}`, {
          embed: new Discord.RichEmbed()
          .setColor(jsonColor)
          .setDescription('**Reason**: ' + reason)
        })
		message.guild.member(usr).ban(`User Responsible: ${message.author.tag} (${message.author.id}) Reason: ${reason}`)
        return message.channel.send(`${process.env.gre} ${usr.user.tag} was banned`, {
            embed: new Discord.RichEmbed()
            .setColor(jsonColor)
            .setDescription('**Reason:** ' + reason)
        })
    },
}
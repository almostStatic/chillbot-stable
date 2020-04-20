const Discord = require("discord.js");

module.exports = {
	name: "vice-kick",
	aliases: ['voice-kick', 'vckick'],
	desc: 'Kick someone from their current voice channel',
	usage: 'vckick <@user or ID>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	
		if (!message.guild.me.hasPermission('MOVE_MEMBERS')) {
		return message.reply("You do not have permission to use this command!")
	}
	const logCh = message.guild.channels.find(x => x.id == logs)
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
	if (!member) {
			return message.channel.send(`Please @mention the member or enter their user ID.`)
	};
	if (!member.voiceChannel) {
		return message.reply(`**${meber.user.tag}** is not in a voice channel.`)
	};
	let vc = member.voiceChannel;

	member.setVoiceChannel(null);

	message.channel.send(`${process.env.gre} Kicked **${usr.user.tag}** from voice channel ${vc.name}`, {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription("**Reason**: " + reason)
	})
			logCh.send("", {
			embed: new Discord.RichEmbed()
			.setTitle('Member Kicked from VC')
			.setColor(jsonColor)
			.setThumbnail(member.user.avatarURL)
			.addField("Member", member.user.tag, true)
			.addField("Moderator", member.author.tag, true)
			.addField("Voice Channel", vc.name, true)
			.addField("Kicked At", `${moment.utc(message.createdAt).format('hh:mm:ss DD/MM/YYYY')} (**UTC**)`, true)
			.addField("\> Reason", reason, true)
			.setFooter("ID: " + member.id, member.user.avatarURL)
		})
			.catch((err) => {  });
}
}
const Discord = require("discord.js");

module.exports.run = async(client,message,args,prefix,jsonColor,logs,sleep,done,error) => {
	
	const filter = m => m.author.id === message.author.id;
	if (!message.guild.me.hasPermission('MOVE_MEMBERS')) {
		return message.reply("You do not have permission to use this command!")
	}
	const logCh = message.guild.channels.find(x => x.id == logs)
	const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	let reason = args.slice(1).join(' ');
	if (!member) {
			return message.channel.send(`Please @mention the member or enter their user ID.`)
	};
	if (!member.voiceChannel) {
		return message.reply(`**${meber.user.tag}** is not in a voice channel.`)
	};
	let vc = member.voiceChannel;

	member.setVoiceChannel(null);

	message.channel.send(`${process.env.gre} Kicked **${member}** from voice channel ${vc.name}`, {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription("**Reason**: " + reason)
	})
			logCh.send("", {
			embed: new Discord.RichEmbed()
			.setTitle('Member Kicked from VC')
			.setColor(jsonColor)
			.setThumbnail(member.user.avatarURL)
			.addField("\> Member", member.user.tag)
			.addField("\> Moderator", member.author.tag)
			.addField("\> Voice Channel", vc.name)
			.addField("\> Kicked At", `${moment.utc(message.createdAt).format('hh:mm:ss DD/MM/YYYY')} (**UTC**)`)
			.addField("\> Reason", reason)
			.setFooter("ID: " + member.id, member.user.avatarURL)
		})
			.catch((err) => {  });
};

module.exports.help = {
	name: 'voice-kick',
};
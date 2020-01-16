const Discord = require("discord.js");

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	
	const filter = m => m.author.id === message.author.id;
	if (!message.guild.me.hasPermission('MOVE_MEMBERS')) {
		return message.reply("You do not have permission to use this command!")
	}
	const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	let reason = args.slice(1).join(' ');
	if (!member) {
			return message.reply(`Please @mention the member or enter their user ID.`)
	};
	if (!member.voiceChannel) {
		return message.reply(`**${meber.user.tag}** is not in a voice channel.`)
	};
	let vc = member.voiceChannel;

	member.setVoiceChannel(null);

	message.channel.send(`${process.env.gre} Kicked **${member}** from voice channel ${vc.name}`, {
		embed: new Discord.RichEmbed()
		.setDescription("**Reason** " + reason)
	})
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Member Kicked")
		.setDescription(`${member.user.tag} has been kicked from voice channel ${member.voiceChannel}`)
		.setColor(message.member.displayColor)
	});
};

module.exports.help = {
	name: 'voice-kick',
};
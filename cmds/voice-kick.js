const Discord = require("discord.js");

module.exports.run = async(client, message, args, error, getSupport) => {
	
	const filter = m => m.author.id === message.author.id;
	if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) {
		error("You do not have permission to use this command!")
	}
	const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	let reason = args.join(' ').slice(1);
	if (!member) {
			error(`Please @mention the member or enter their user ID.`)
	};
	if (!member.voiceChannel) {
		error(`${meber} is not in a voice channel.`)
			.catch(e => {});
	};

	member.setVoiceChannel(null);

	message.react('👌');
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
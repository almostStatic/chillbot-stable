const Discord = require("discord.js");
module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	let slappedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if (!slappedUser) {
		return message.channel.send( `**${message.author.username}**` + " Please mention a user who is in this guild.\nYou may also use their ID.")
	} else if (slappedUser) {
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription(`${message.author.tag} has slapped ${slappedUser.user.tag}!`)
			.setColor(jsonColor)
		});
	};

};

module.exports.help = {
	name: 'slap',
};
const Discord = require("discord.js");

module.exports.run = async (client,message,args,prefix,jsonColor,sleep,done,error) => {
	let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!person) {
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setAuthor(message.author.tag, message.member.avatarUEL)
			.setColor(jsonColor)
			.setImage(message.member.avatarURL)
		})
	} else if (person) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setAuthor(person.user.tag, person.user.avatarUEL)
			.setColor(jsonColor)
			.setImage(person.user.displayAvatarURL)
			
		})
	}
};

module.exports.help = {name:"av"}
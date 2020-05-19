const Discord = require("discord.js");

module.exports = {
	name: "avatar",
	aliases: ['pfp', 'icon', 'av', 'avatar'],
	desc: 'Get someone\'s avatar',
	usage: 'avatar <user>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if (!person && args.length) {
		return message.channel.send (
			"", { embed: new Discord.RichEmbed().setColor('#da0000').setDescription(`${process.env.re} I can't find that user!`) } 
		)
	};
	if(!person) {
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setAuthor(message.author.tag, message.author.avatarURL, message.author.avatarURL)
			.setColor(message.author.color)
			.setImage(message.author.avatarURL)
		});
	} else if (person) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setAuthor(person.user.tag, person.user.avatarURL)
			.setColor(jsonColor)
			.setImage(person.user.displayAvatarURL)
		});
		};
	},
};
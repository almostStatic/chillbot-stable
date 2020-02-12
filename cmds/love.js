const Discord = require("discord.js");
module.exports = {
	name: "love",
	desc: "Find the love ratio between yourself and someone else!",
	usage: 'love <users>',
	aliases: ['love'],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
				let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

				if (!person || message.author.id === person.id) {
						person = message.guild.members
								.filter(m => m.id !== message.author.id)
								.random();
				}

				const love = Math.random() * 100;
				const loveIndex = Math.floor(love / 10);
				const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

				const embed = new Discord.RichEmbed()
						.setColor("#ffb6c1")
						.addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
						`💟 ${Math.floor(love)}%\n\n${loveLevel}`);

				message.channel.send(embed);
    
	},
}
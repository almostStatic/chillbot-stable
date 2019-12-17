const Discord = require("discord.js")

module.exports.run = async(client, message, args, error, getSupport, green, red) => {
	let usr = message.guild.member(message.guild.members.get(args[0]) || message.mentions.users.first())
	let help = new Discord.RichEmbed()
	.setTitle("ChillBot Help")
	.addField(">ban [user] [reason] **BETA**", 'cmd coming soon')
	.addField(">kick [user] [reason]", 'cmd coming soon')
	.addField(">warn [user] [reason]", 'cmd coming soon')
	.addField(">membercount", 'See the total number of members in this server')
	if(!usr) {
		usr = message.author;
	}
	if (usr == 'here') {
		message.channel.send(help)
	}
 
	

};

module.exports.help = {
	name: 'help',
};
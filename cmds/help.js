const Discord = require("discord.js")

module.exports.run = async(client, message, args, error, getSupport, green, red) => {
	let usr = message.guild.member(message.guild.members.get(args[0]) || message.mentions.users.first()) || message.author;
	let help = new Discord.RichEmbed()
	.setColor(message.member.displayColor)
	.setTitle("ChillBot Help")
	.addField(">ban [user] [reason] **BETA**", 'cmd coming soon')
	.addField(">kick [user] [reason]", 'cmd coming soon')
	.addField(">warn [user] [reason]", 'cmd coming soon')
	.addField(">userinfo [@user OR user's ID]", `Get user information, for your information just do \`userinfo\``)
	.addField(">membercount", 'See the total number of members in this server')
	.addField(">invite", "Get the bot's invite link")
	.addField(">ping", "See the bot's latency")
	.addField(">reportbug", "Use this command in order to report a bug to the bot's owner")
	
if (usr == 'here') {
		message.channel.send(help)
	}

message.author.send(help)
	.catch(er => {
		message.channel.send(`I cannot DM you, please use the command \`${process.env.prefix}show-help\``)
	})	

};

module.exports.help = {
	name: 'help',
};
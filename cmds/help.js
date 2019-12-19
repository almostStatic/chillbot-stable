const Discord = require("discord.js")

module.exports.run = async(client, message, args, error, getSupport, green, red) => {
	let usr = message.guild.member(message.guild.members.get(args[0]) || message.mentions.users.first()) || message.author;
	let help = new Discord.RichEmbed()
	.setColor(message.member.displayColor)
	.setTitle("ChillBot Help")
	.addField(">warn [user] [reason]", 'Warn a user for a specific reason. You may use their ID instead of mentioning them!')
	.addField(">userinfo [@user OR user's ID]", `Get user information, for your information just do \`userinfo\``)
	.addField(">membercount", 'See the total number of members in this server')
	.addField(">invite", "Get the bot's invite link")
	.addField(">ping", "See the bot's latency")
	.addField(">say [something to say]", "Get the bot to say something, we hold the right to remove your permissions to use this comand if you missuse it.\nIf you believe someone is misusing it, please contact `static#4432`")
	.addField(">reportbug", "Use this command in order to report a bug to the bot's owner")
	//	.addField(">ban [user] [reason] **BETA**", 'cmd coming soon')
//	.addField(">kick [user] [reason]", 'cmd coming soon')

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
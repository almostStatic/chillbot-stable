const Discord = require('discord.js');

module.exports = {
	name: 'vote',
	aliases: ['vote'],
	desc: "See the bot's vote URL for DBL and other bot advertising sites",
	usage: 'vote',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		dbl = "https://top.gg/bot/572733004254937088/vote";
		return message.channel.send({
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setTitle("Links to upvote " + client.user.username)
			.setDescription(`[DBL](${dbl}, "vote for ChillBot on DBL")`)
		})
	},
}
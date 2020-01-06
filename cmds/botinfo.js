const Discord = require("discord.js")

module.exports.run = async(client, message, args, error, getSupport) => {
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Bot Information")
		.setThumbnail(client.user.avatarURL)
		.addField("> Name", client.user.tag, true)
		.addField("> Total Members Served", client.users.size, true)
		.addField("> Created At", client.user.createdAt.toDateString())
		.addField("> Discord.js Version", `V ${require("discord.js").version}`)
		.addField("> Joined Your Server", message.guild.member(client.user).joinedAt.toDateString())
		.addField("> Powered By", "[repl.it](https://repl.it/)\n[Bot Owner's Replit](https://repl.it/@static2020)\n[Bot Owner's GitHub](https://github.com/asadhum2005)\nUptime Robot on repl.it")
		.addField("> Memory Usage", `**${Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024)}** MB` )
		.addField("> Extras", `**Client Pings**: ${message.client.pings}\n**Client WS Ping**: ${message.client.ping}\n**Client Status**: ${message.client.status}`)
		.setTimestamp()
		.setColor(message.guild.me.displayColor)
	})
		.catch(er => {
			message.reply(`There was an error, ${er}`)
		})
}

module.exports.help = {
	name: 'botinfo',
};
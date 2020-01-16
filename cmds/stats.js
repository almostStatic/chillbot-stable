const Discord = require("discord.js")

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {

	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Stats")
		.setThumbnail(client.user.avatarURL)
		.addField("\> Name", client.user.tag, true)
		.addField("\> Total Members Served", client.users.size, true)
		.addField("\> Guilds", client.guilds.size, true)
		.addField("\> Channels", client.channels.size, true)
		.addField("\> Voice Connections", client.voiceConnections.size, true)
		.addField("\> Created At", client.user.createdAt.toDateString(), true)
		.addField("\> Discord.js Version", `V ${require("discord.js").version}`, true)
		.addField("\> Joined Your Server", message.guild.member(client.user).joinedAt.toDateString(), true)
		.addField("\> Memory Usage", `**${Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024)}** MB` )
		.setTimestamp()
		.setColor(jsonColor)
	})
		.catch(er => {
			message.reply(`There was an error, ${er}`)
		})
}

module.exports.help = {
	name: 'stats',
};
const keyv = require("keyv");
const Discord = require("discord.js");
let cmd = new keyv("sqlite://./database/cmdCount.sqlite")

module.exports = {
	name: "botinfo",
	aliases: ["stats", 'botinfo'],
	desc: "Get some basic stats of the bot; ie how many servers its in or how many commands have been used, etc.",
	usage: 'stats',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		cmdCount = await cmd.get("cmds");
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle('Bot Stats')
		.setThumbnail(client.user.avatarURL)
		.addField("> Name", client.user.tag, true)
		.addField("> Total Members Served", client.users.size, true)
		.addField("> Guilds", client.guilds.size, true)
		.addField("> Created At", client.user.createdAt.toDateString(), true)
		.addField("> Discord.js Version", `V ${require("discord.js").version}`, true)
		.addField("> Joined Your Server", message.guild.member(client.user).joinedAt.toDateString(), true)
		.addField("> Powered By", "[repl.it](https://repl.it/)\n[Bot Owner's Replit](https://repl.it/@static2020)\n[Bot Owner's GitHub](https://github.com/asadhum2005)\n[Uptime Robot on repl.it](https://www.uptimerobot.com/)")
		.addField("> Memory Usage", `**${Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024)}** MB` )
		.addField("> Commands Parsed (since 10/02/2020)", cmdCount)
		.addField("> Extras", `**Client Pings**: ${Math.trunc(message.client.pings)}\n**Client WS Ping**: ${message.client.ping}\n**Client Status**: ${message.client.status}`)
		.setTimestamp()
		.setColor(jsonColor)
	})
		.catch(er => {
			message.reply(`There was an error, ${er}`)
		})
	}
}
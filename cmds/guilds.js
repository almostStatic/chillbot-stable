const Discord = require("discord.js")
module.exports = {
	name: "guilds",
	aliases: ["guilds", "servers"],
	desc: 'See a list of the servers the bot is in, for our bot devs only',
	usage: 'guilds',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	if (!['373900508026372097', process.env.ownerid].includes(message.author.id)) {
		return message.channel.send(`${process.env.re} | This command is restricted due to **data protection!**`)
	} 

message.author.send(`>>> Guilds:\n\`\`\`\n${client.guilds.map(r=>r.name.toString()).join("\n")}\n\`\`\``)

}
}
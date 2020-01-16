const Discord = require("discord.js")

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	if (message.author.id != process.env.ownerid) {
		return message.channel.send(`${process.env.re} | This command is restricted due to **data protection!**`)
	} 

message.author.send(`>>> Guilds:\n\`\`\`\n${client.guilds.map(r=>r.name.toString()).join("\n")}\n\`\`\``)

}

module.exports.help = {
	name: "guilds"
}
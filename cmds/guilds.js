const Discord = require("discord.js")
module.exports = {
	name: "guilds",
	aliases: ["guilds", "servers"],
	desc: 'See a list of the servers the bot is in, for our bot devs only',
	usage: 'guilds',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let server = client.guilds.get('575388933941231638');
		let staff = server.roles.find(x => x.name == '♕ Bot Staff ♕')
		let mem = server.member(message.author);
		if (!mem) {
			return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`You cannot use this command!`)
				.setColor(jsonColor)
			})
		}
		if (!mem.roles.has(staff.id)) {
			return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`You cannot use this command!`)
				.setColor(jsonColor)
			});
		}


message.author.send(`>>> Guilds:\n\`\`\`\n${client.guilds.map(r=>r.name.toString()).join("\n")}\n\`\`\``)

}
}
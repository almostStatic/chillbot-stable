const Discord = require('discord.js')

module.exports = {
	name: "say",
	aliases: [],
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	message.delete();
	let msg = await message.channel.send("Verifying your message...")
	let type = args[0]
	let content = args.slice(1).join(' ')
	if (!type) {
		return msg.edit(`**${message.author.tag}**, You need to provide a message type!\n\n> Either \`embed\` or \`text\``)
	}
	if (!["embed", "text"].includes(type.toLowerCase())) {
		return msg.edit("That is not a valid type!")
	}
	if (type == 'text') {
		return msg.edit(content)
	}
	if (type == 'embed') {
		return msg.edit("", {
			embed: new Discord.RichEmbed()
			.setDescription(content)
			.setColor(jsonColor)
		})
	}
}
}
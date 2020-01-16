const pkg = require("discord.js")

module.exports.run = async (client,message,args,prefix,jsonColor,sleep,done,error) => {
	message.channel.send("", {
		embed: new pkg.RichEmbed()
		.setDescription(`${message.author.tag} has drunk a pint and taken a long nap!`)
		.setColor(jsonColor)
	})
}

module.exports.help = { name: 'drink' }
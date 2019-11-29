const pkg = require("discord.js")

module.exports.run = async (client, message, args) => {
	message.channel.send("", {
		embed: new pkg.RichEmbed()
		.setDescription(`${message.author.tag} has drunk a pint and taken a long nap!`)
	})
}

module.exports.help = { name: 'drink' }
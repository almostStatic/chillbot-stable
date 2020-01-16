const D = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	message.channel.send("", {
		embed: new D.RichEmbed()
		.setColor(jsonColor)
		.setDescription(`Hitting errors? Bot not working? [Get help here >](${process.env.supportServer})`)
	})
}

module.exports.help = {
	name: 'support'
}
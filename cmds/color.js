const Discord = require("discord.js")

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	let color = args[0]
	let filter = m => m.author.id === message.author.id;
	if (!color) {
		message.reply("Please enter the HEX color code you wish for me to show you.\n\nType `cancel` to cacnel, `RANDOM` (must be uppercase) for a random color, expires in 15 seconds...")	
			.then(msg => msg.delete(15000))
				.catch(er => {  })

		message.channel.awaitMessages(filter, {
			max: 1,
			time: 15000
		})
			.then(async (got) => {
				if (got.first().content.toLowerCase() == 'cancel') {
					return message.reply(`${process.env.gre} Command Cancelled!`)
				}
				message.channel.send("", {
					embed: new Discord.RichEmbed()
					.setTitle(got.first().content)
					.setColor(got.first().content)
					.setTimestamp()
				})
			})
				.catch(() => {
					return message.reply(`${process.env.re}, you toook too long-Command Cancelled`)
				})
	} else if (color) {
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setTitle(color)
			.setColor(color)
		})
	}

	/*if (type == 'rgb') {
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setTitle(color)
			.setColor(color.substring(4, color.length-1)
         .replace(/ /g, '')
         .split(',')
			)
		})
			.catch(er => {
				message.reply(er)
			})
	} */
};

module.exports.help = {
	name: 'color',
};
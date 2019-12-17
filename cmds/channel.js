const Discord = require("discord.js")

module.exports.run = async(client, message, args, getSupport, error, green, red, done) => {
	let cmd = args[0].toLowerCase()
	if (!cmd) {
		return message.channel.send("", {
			embed: new Discrod.MessageEmbed()
			.setColor(message.member.displayColor)
			.setTitle("Channel Commands")
			.addField(`\`${prefix}channel topic\``, "Set the channel topic to anything you want!\nIf there is nothing given then the current channel topic will be reset.")
		})
	};

	if(cmd == 'topic') {
		let filter = m => m.author.id === message.author.id;
		message.reply("What would you like to change this channel's topic to?\n> Type `rem` if you wish to remove it!\n> Type `cancel` to cancel, Expires in 40 Seconds.")
			.then(r => r.delete(40000))
				.catch()
		// rem to delete chTopic
		message.channel.awaitMessages(filter, {
			max: 1,
			time: 40000
		})
			.then(async got => {
				let topic = got.first().content;
					if (topic.toLowerCase() == 'cancel') {
						return error(green+" Command Cancelled")
					}

				message.channel.setTopic(topic)
					.then(done(`${green} Channel Topic Changed!`))

 			})
				.catch(() => {
						return error(red+" Command Cancelled, you took too long!")
				})
	}
}

module.exports.help = {
	name: 'channel'
}
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
	if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
		return message.channel.send(`${process.env.re} | I need the **MANAGE MESSAGES** permissions in order for this command to work!`)
	}
	let delCount = args[0]
	if(isNaN(delCount)) {
		return message.channel.send(`${process.env.re} You need to provide a valid number of messages to delete`)
	}
	let delNumber = Number(delCount);
	if (delNumber > 100) {
		return message.channel.send(`${process.env.re} You may only delete 1 - 100 messages at a time`)
	}
	let fetched = await message.channel.fetchMessages({ limit: delNumber });
	message.channel.bulkDelete(fetched)
		const msg =	await message.channel.send(`${process.env.gre} **${message.author.username}** has deleted ${delNumber} messages!\nThis message will auto-delete within the next 3 seconds...`)
			msg.delete(3000)
			.catch(err => {
				console.log(err)
				message.channel.send(`There was an error\n${err}`)
			})
}

module.exports.help = {
	name: "purge"
}
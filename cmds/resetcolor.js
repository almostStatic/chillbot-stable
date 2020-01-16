const Discord = require('discord.js')
const json = require('async-jsonstore-io')
const jsonstore = new json(process.env.jstk)
const usedCmd = new Set();

module.exports.run = async(client, message, args) => {
	if (usedCmd.has(message.author.id)) {
		return message.reply('you are using this command too fast!')
	} else {
				message.delete().catch(o_O => {  })
				const filter = m => m.author.id == message.author.id;
				const msg = await message.reply("Are you sure you want to reset your color preference? If so, please respond with `confirm`\n\n> Type `cancel` to cancel | Expires in 10 seconds")
				message.channel.awaitMessages(filter, {
					max: 1,
					time: (10 * 1000),
				}).then(async(collected) => {
					if(collected.first().content.toLowerCase() == 'confirm') {
						await jsonstore.delete('color' + message.author.id)
						msg.edit(`${process.env.gre} ${message.author.username}, has succsessfully reset their color preference!`)
					} else {
						return msg.edit(`${process.env.gre} command cancelled`)
					}
				}).catch(() => {
					msg.edit(`${message.author} You did not respond in time; the command was cancwllws`)
				})

        usedCmd.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          usedCmd.delete(message.author.id);
        }, 30000);
    }
}

module.exports.help = {
	name: 'resetcolor'
}
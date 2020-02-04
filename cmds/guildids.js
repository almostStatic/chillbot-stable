const Discord = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,logs,sleep,done,error) => {
	let devs = ['501710994293129216', '373900508026372097']
	if(!devs.includes(message.author.id)) {
		return message.reply('You can\'t use this command!')
	} else {
		message.author.send(client.guilds.map(x => x.id.toString()).join('\n'))
		message.react('580716592980164618')
	}
}

module.exports.help = {
	name: 'guildids'
}
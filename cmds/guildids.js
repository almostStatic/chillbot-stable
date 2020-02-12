const Discord = require('discord.js')
module.exports = {
	name: "guildids",
	aliases: ['guildids'],
	desc: "View a list of GUILD_IDS that the bot is in. This command is also limited to our devs only",
	usage: 'guildids',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let devs = ['501710994293129216', '373900508026372097']
	if(!devs.includes(message.author.id)) {
		return message.reply('You can\'t use this command!')
	} else {
		message.author.send(client.guilds.map(x => x.id.toString()).join('\n'))
		message.react('580716592980164618')
	}
}

}
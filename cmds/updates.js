const Disc = require('discord.js')

module.exports.run = async(client, message, args) => {
	message.channel.send('', {
		embed:new Disc.RichEmbed()
		.setColor('#2296F3')
		.setTitle('ChillBot v2')
		.setDescription('**Added** bot website, still in beta [view here](https://chillbot.asad.codes/)\n**Fixed** kick command still logging kick even if user wasn\'t\n**New Command** `>stats` and `>checkinv [inv code or url]`\n**Added** `>meme`\n**Added** a bug report page that logs to #bug-reports\n**Added** New developer command, `>npm [dependancy]` to search the npm registry for a package!') 
		.addField('Extra', '[Website](https://chillbot.asad.codes)\n[Report bug](https://chillbot.asad.codes/reportbug)')
		.setTimestamp()
		.setFooter('ChillBot v2')
	}) 
}

module.exports.help = {
	name: 'update'
}
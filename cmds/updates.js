const Disc = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	message.channel.send('', {
		embed:new Disc.RichEmbed()
		.setColor(jsonColor)
		.setThumbnail(client.user.avatarURL)
		.setTitle('Recent Updates')
		.setDescription('**__FINALLY__** Made it so the prefix is now customizable! Run the command `>prefix [new prefix]` to do so! Just run `>prefix` to see the prefix of the current server\n**Changed** help command; it now displays the correct guild prefix for command usage\n**BETA** added commands which let you set your color preference!\n**Chanegd** mod commands, the command message will now be deleted once used\n**Renamed** `>permcheck` to `>perns`\n**Renamed** `>update` to `>updates`\n**Added** `>updates` to the help commands\n**Fixed** `>voice-kick` so you now only need the `MOVE_MEMBERS` permission in order for it to work and added check if the bot has permission to do this; added proper confirmation message\n**Fixed** bots are now immune to the `>ban` command\n**Added** `>support` command for an invite to the support server\n**Fixed** `>slowmode` command so it now only requirees the manage channels permission\n**Added** `>softban` command, ban a user and then instantly unban to delete messages\n**Fixed** slowmode erreor handling was improved drastically\n**Added** `>idban [user ID to ban from guild]` bans a user who is not currently a member of the guild. The ID must be specified\n**Updated** `>serverinfo` command; now displays more server information\n**Redone** the invite command now looks a lot better\n**Chanegd** if you kick someone from a voice channel using `>voice-kick [user]` it will now log the event in the current log channel otherwise do nothing\n**changed** warns are now sent to the log channel; warnCount isn\'t logged yet and it is harder than i thought it would be') 
		.addField('Extra', '[Website](https://chillbot.asad.codes)\n[Report bug](https://chillbot.asad.codes/reportbug)')
		.setTimestamp()
		.setFooter('ChillBot v2.0.7')
	}) 
}

module.exports.help = {
	name: 'updates'
}
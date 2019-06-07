const Discord = require('discord.js');

module.exports.run = async(bot, message, args)=>{
    const embed = new Discord.RichEmbed()
    .setColor(0x7aa7ef)
    .setThumbnail(bot.user.avatarURL)
    .setTitle("Updates ")
    .addField("New Features", "Multiple bot prefixes `c.`, `>`\nAnother user has received eval permission\nWelcome Messages are here!\nLeave Messages are also here!")
    .addField("New Commands", "`c.unban` added to unban users\nAdd `c.urban` to search a word on urban disctionary\nAdd `c.updates` to view bot updates\nc.docs [inquiry] - search the **discord.js** documentation\n**(Staff Only)** c.partner [server rep] [invite_url] [server description]\nc.files see how many command files are in use and are usable, and how much memory they are taking up\nUse c.uptime to see the bot's current uptime\n**(Staff Only) `c.fixmute.all [fix mute for the server]`**\n`c.emojis` get a list of server emojis!")
    .addField("Updated Commands", 'c.membercount - Updated to show bots and humans seperately\nc.botinfo, displays memory used and version of discord.js AND current number of voice connections\nc.serverinfo redone, and shows server region')
    .addField("Fixed Commands", 'Fixed c.suggest')
    .addField("Guild Changes", ' :flag_gb: Server region is set to London')

    message.channel.send({ embed });
};


module.exports.help = {
    name: 'updates',
};

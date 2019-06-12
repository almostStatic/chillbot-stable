const Discord = require('discord.js');

module.exports.run = async(bot, message, args)=>{
    const embed = new Discord.RichEmbed()
    .setColor(0x7aa7ef)
    .setThumbnail(bot.user.avatarURL)
    .setTitle("Updates ")
    .addField("New Features", "Multiple bot prefixes `c.`, `>`\nAnother user has received eval permission\nWelcome Messages are here!\nLeave Messages are also here!")
    .addField("New Commands", "Added c.roles - view a list of the server roles!\n**(Staff Only)** `c.send-ad` send the server partner ad to the mentioned user. Also works by ID.\n`c.unban` added to unban users\nAdd `c.urban` to search a word on urban disctionary\nAdd `c.updates` to view bot updates\nc.docs [inquiry] - search the **discord.js** documentation\n**(Staff Only)** c.partner [server rep] [invite_url] [server description]\nc.files see how many command files are in use and are usable, and how much memory they are taking up\nUse c.uptime to see the bot's current uptime\n**(Staff Only) `c.fixmute.all [fix mute for the server]`**\n`c.emojis` get a list of server emojis!")
    .addField("Updated Commands", 'Updated unban error messages\nUpdated c.edit\nWhen you unmute a user, you now recieve a confirmation message saying that they are unmuted!\nAdded ready timestamp as Embed Footer for `c..uptime`\nFixed c.kiss\nUpdated c.warn, made Warned at into a date string\nUpdated c.kick command and made last embed field inline\nUpdated the c.report command\nFixed log issues, updating console usage and adding colours\nUpdated c.kick, "kicked at" field now formats as a DateString() and fixed error messages\nUpdated c.ban, changed error messages\nUpdated c.multiply, changed error messages\nUpdated c.divide, changed error messages\nUpdated c.subtract, changed error messages\nUpdated c.add, changed error messages\nc.membercount - Updated to show bots and humans seperately and total membercount\nc.botinfo, displays memory used and version of discord.js AND current number of voice connections\nc.serverinfo redone, and shows server region')
    .addField("Fixed Commands", 'Fixed c.reload [commandName]\nFixed c.ping\nFixed c.suggest')
    .addField("Guild Changes", 'Added partner ad\n:flag_gb: Server region is set to London')

    message.channel.send({ embed });
};


module.exports.help = {
    name: 'updates',
};
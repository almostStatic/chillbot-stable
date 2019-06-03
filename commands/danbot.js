const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    let embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setTitle("Sponsored Bot #2: DanBot#7429")
    .setThumbnail('https://cdn.discordapp.com/avatars/422433314347941896/d3e1c5c58de570746f5ca8e745f11392.png?size=2048')
    .setDescription("DanBot is a multi-purpose bot, Bringing features to your discord server. Here is some of the many features that DanBot has: Music, Animal Images, Giveaways, Moderation Commands, Auto moderation, Custom guild commands and many more! with updates almost every day you can guarantee DanBot will always be there making sure your server is Fun and Not full of invite links/Websites.")
    .addField('Owner', '<@137624084572798976>', true)
    .addField("Bot Links", '[Website](https://danbot.xyz/)\n[Invite](https://danbot.xyz/invite/)\n[Support Server](https://discord.gg/nEGNZmq)')
    .addField('Upvote', '[Upvote on BotList](https://botlist.space/bot/422433314347941896/upvote)\n[Upvote on Discord Bots](https://discordbots.org/bot/422433314347941896/vote)\n[Upvote on Bots For Discord](https://botsfordiscord.com/bot/422433314347941896/vote)\n[Upvote on Discord Boats](https://discord.boats/bot/422433314347941896)\n[Upvote on DiscordBoats Club](https://discordboats.club/bot/422433314347941896)\n[Upvote on Discord Bots Index](https://discordbotindex.com/apiv1/upvote/422433314347941896)\n[Upvote on Discord Bots List](https://discordbotlist.com/bots/422433314347941896)\n[Upvote on Discord Bots World](https://discordbot.world/bot/422433314347941896)\n[Upvote on Devine Discord Bots](https://divinediscordbots.com/bots/422433314347941896/vote)')
   .setTimestamp()
    .setFooter("You may access this embed by the command c.danbot", 'https://cdn.discordapp.com/avatars/422433314347941896/d3e1c5c58de570746f5ca8e745f11392.png?size=2048')
    message.channel.send(embed)
}

module.exports.help = {
    name: 'danbot'
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args)=>{
      
      let embed = new Discord.RichEmbed()
      .setTitle("Sponsored Bot #1: RSG Bot#1533")
      .setColor(0x00ffff)
      .setThumbnail("https://cdn.discordapp.com/avatars/527831704703074324/e505eb28a62e720111d5e4dfbb63dc4d.png?size=2048")
      .setDescription("**__RSG Bot__** - A Bot For Moderation/Other\n**__RSG Bot__** is a multiperpose discord bot made by the RSG Community!")
      .addField("Bot Owner", "<@425165710847770634> (425165710847770634)")
      .addField("Bot Links", `[Website](https://rsgbot.glitch.me/)\n[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=527831704703074324&scope=bot&permissions=1916136831)\n[Support Server](https://discord.gg/NjwnwCN)`)
      .addField("Voting Links", "[Upvote on Discord Bots List](https://discordbots.org/bot/527831704703074324/vote)\n[Upvote on Bots for Discord](https://botsfordiscord.com/bot/527831704703074324/vote)\n[Upvote on DiscordBotsList](https://discordbotlist.com/bots/527831704703074324)\n[Upvote on devine Discord bots](https://divinediscordbots.com/bot/527831704703074324/vote)\n[Upvote on Bots on Discord](https://bots.ondiscord.xyz/bots/527831704703074324)")
      .setFooter("This Embed can be accessed by the command: c.rsg-bot", `https://cdn.discordapp.com/avatars/527831704703074324/e505eb28a62e720111d5e4dfbb63dc4d.png?size=2048`)
      .setTimestamp()
      message.channel.send(embed)

}
module.exports.help = {
      name: "rsg-bot"
}
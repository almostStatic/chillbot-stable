const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let faq = new Discord.RichEmbed()
    .setTitle(`FAQ (Discord.js)`)
    .setDescription(`[Discord.js Guide for BEGINNERS](https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/frequently-asked-questions.md)`)

message.channel.send(faq);
let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`/faq used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: "faq",
}; 
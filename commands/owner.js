const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let ownerembed = new Discord.RichEmbed()
    .setDescription("**sad (Eclipse)#3728** is my owner! He coded every one of my lines!")
    .setColor("RANDOM")
// 431684183371415555

let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`/owner used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)
    
}

module.exports.help = {
  name: "owner"
}

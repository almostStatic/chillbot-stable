const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    message.reply(`Leaving Guild...`)
    message.channel.send(`**LWEAVING:** \n ${message.guild.name} \n ${message.guild.id} \n **Command Called By** ${message.member.user.tag}`)
    message.channel.send(message)
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.leave used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)







    message.guild.leave()

}

module.exports.help = {
    name: "leave"
}

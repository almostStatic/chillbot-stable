const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    message.reply(`Leaving Guild...`)
    message.channel.send(`**LWEAVING:** \n ${message.guild.name} \n ${message.guild.id} \n **Command Called By** ${message.member.user.tag}`)
    message.channel.send(message)








    message.guild.leave()

}

module.exports.help = {
    name: "leave"
}
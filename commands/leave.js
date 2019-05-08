const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    message.reply(`Leaving Guild...`)
    message.channel.send(`**LWEAVING:** \n ${message.guild.name} \n ${message.guild.id} \n **Command Called By** ${message.member.user.tag}`)
    message.channel.send(message)
    message.guild.leave()
    
        const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.leave used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);








    message.guild.leave()

}

module.exports.help = {
    name: "leave"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let prefixEmbed = new Discord.RichEmbed()
//                      Hey user#1234 my prefix...
    .setDescription("my prefix is `c.` and currently **__isn't changeable!__**")
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(prefixEmbed);
    
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.prefix used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
}

module.exports.help = {
  name: "prefix"
}

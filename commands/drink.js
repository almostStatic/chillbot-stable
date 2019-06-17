const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let drinkEmbed = new Discord.RichEmbed()

    .setDescription(`${message.member.user.tag} has drunk a pint of 🍺 `)
    .setColor('RANDOM')

    message.channel.send(drinkEmbed);
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/drink used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
}

module.exports.help = {
  name: "drink"
}

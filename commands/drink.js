const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let drinkEmbed = new Discord.RichEmbed()

    .setDescription(`${message.member.user.tag} has drunk a pint of 🍺 `)
    .setColor('RANDOM')

    message.channel.send(drinkEmbed);
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.drink used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
  name: "drink"
}

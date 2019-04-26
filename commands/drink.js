const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let drinkEmbed = new Discord.RichEmbed()

    .setDescription(`${message.member.user.tag} has drunk a pint of 🍺 `)
    .setColor('RANDOM')

    message.channel.send(drinkEmbed);

}

module.exports.help = {
  name: "drink"
}
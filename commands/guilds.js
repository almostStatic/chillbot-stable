const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let botguilds = bot.guilds
    let embed = new Discord.RichEmbed()

    .setDescription(`${botguilds}`)
    .setTitle("Here is a list of guilds that the bot is in:")
    .setColor("#398473")

    message.channel.send(embed);


}

module.exports.help = {

    name: "guilds"

}
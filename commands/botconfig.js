const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()

    .setTitle("Bot Configuratoin and stuffs")
    .addField("Prefix: `/`", " UNCHANGEABE | THIS WILL REMAIN THE SAME")
    .addField("**Running On**", "main.js")
    .addField("Command Handler Status", "In use | Fully Working")
    .setColor("RANDOM")
    .setFooter("a footer", message.author.avatarURL)

        message.channel.send(embed);

}

module.exports.help = {
  name: "botconfig"
}
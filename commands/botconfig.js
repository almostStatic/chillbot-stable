const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()

    .setTitle("Bot Configuratoin and stuffs")
    .addField("Prefix: `c.`", " UNCHANGEABE | THIS WILL REMAIN THE SAME")
    .addField("**Running On**", "main.js")
    .addField("Command Handler Status", "In use | Fully Working")
    .setColor("RANDOM")
    .setFooter("a footer", message.author.avatarURL)

        message.channel.send(embed);
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.botconfig used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
  name: "botconfig"
}

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
        let used = new Discord.RichEmbed()
        .setAuthor(`Command Used:`, bot.user.avatarURL)
        .setColor(`#81868e`)
        .setDescription(`c.botconfig used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
        bot.channels.get("575619138576318484").send(used)
      //  const used = new Discord.RichEmbed()



}

module.exports.help = {
  name: "botconfig"
}

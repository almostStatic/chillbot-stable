const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let onlyinnsfwchannel = new Discord.RichEmbed()

    .setDescription("You can only use this commmand in an nsfw channel!")
    .setColor("RANDOM")

    if(message.channel.type !== "nsfw") return message.channel.send({embed: onlyinnsfwchannel});

    // If it is an NSFW Channel:

    message.channel.send("Works!!");
    const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.test2 used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);


}

module.exports.help = {
  name: "unusbale"
}

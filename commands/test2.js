const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let onlyinnsfwchannel = new Discord.RichEmbed()

    .setDescription("You can only use this commmand in an nsfw channel!")
    .setColor("RANDOM")

    if(message.channel.type !== "nsfw") return message.channel.send({embed: onlyinnsfwchannel});

    // If it is an NSFW Channel:

    message.channel.send("Works!!");

}

module.exports.help = {
  name: "unusbale"
}
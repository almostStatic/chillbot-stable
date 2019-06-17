const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let onlyinnsfwchannel = new Discord.RichEmbed()

    .setDescription("You can only use this commmand in an nsfw channel!")
    .setColor("RANDOM")

    if(message.channel.type !== "nsfw") return message.channel.send({embed: onlyinnsfwchannel});

    // If it is an NSFW Channel:

    message.channel.send("Works!!");
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/unusable used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)


}

module.exports.help = {
  name: "unusbale"
}

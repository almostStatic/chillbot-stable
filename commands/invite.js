const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Invite people to this server using:** \n https://discord.gg/YUjuY6E`)
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.invite used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)


}

module.exports.help = {
    name: "invite"
}

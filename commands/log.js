const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let tolog = args.join(" ");
    const logEmbed = new Discord.RichEmbed()

    .setTitle(`${message.member.user.tag} has logged:`)
    .setDescription(tolog)
    .setColor("RANDOM")
    .setImage(message.author.avatarURL)
    .setTimestamp()

    let logChannel = message.guild.channels.find(`name`, "logs");
    if(!logChannel) return message.channel.send("Can't find logs channel!");
    message.channel.send("Logged!")

}

module.exports.help = {
    name: "log"
}
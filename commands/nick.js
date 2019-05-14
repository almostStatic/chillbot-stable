const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    toSet = args.join(" ");

    message.guild.members.get(bot.user.id).setNickname(toSet);
    message.channel.send("Nickname Changed")
    message.channel.send("Remember, the nickname provided must be 32 or fewer characters in length!")

    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.nick used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

    
}

module.exports.help = {
    name: "nick"
}
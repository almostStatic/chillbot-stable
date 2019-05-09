const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    toSet = args.join(" ");

    message.guild.members.get(bot.user.id).setNickname(toSet);
    message.channel.send("Nickname Changed")
    message.channel.send("Remember, the nickname provided must be 32 or fewer characters in length!")

    const nickUsedEmbed = new Discord.RichEmbed()

    .setTitle("Command Used")
    .setDescription(`c.nick was used in ${message.guild.name} (${message.guild.id}, by ${message.author}, ${message.author.id} (${message.author.username})) to change my nickname to ${toSet}`)

    bot.channels.get("575619138576318484").send(nickUsedEmbed);

    
}

module.exports.help = {
    name: "nick"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

    let embed = new Discord.RichEmbed()

        .setDescription(`Your channel is: <#${message.channel.id}>`)
        .setColor("RANDOM")

            message.channel.send(embed);
            let used = new Discord.RichEmbed()
            .setAuthor(`Command Used:`, bot.user.avatarURL)
            .setColor(`#81868e`)
            .setDescription(`/channel used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
            bot.channels.get("575619138576318484").send(used)



                // indented ! 
                    // indented even more...
}

module.exports.help = {
  name: "channel"
}

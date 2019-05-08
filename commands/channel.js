const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

    let embed = new Discord.RichEmbed()

        .setDescription(`Your channel is: <#${message.channel.id}>`)
        .setColor("RANDOM")

            message.channel.send(embed);
                const used = new Discord.RichEmbed()

                   .setTitle("Command Used:")
                    .setDescription(`c.channel used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
                     .setColor("RANDOM")
                      bot.channels.get("575619138576318484").send(used);




                // indented ! 
                    // indented even more...
}

module.exports.help = {
  name: "channel"
}

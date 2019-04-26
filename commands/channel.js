const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

    let embed = new Discord.RichEmbed()

        .setDescription(`Your channel is: <#${message.channel.id}>`)
        .setColor("RANDOM")

            message.channel.send(embed);


                // indented ! 
                    // indented even more...
}

module.exports.help = {
  name: "channel"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    hostembed = new Discord.RichEmbed()
  
    .setTitle("Get the best bot/web hosting here!")
    .setColor("RANDOM")
    .setURL("https://www.seimaxim.com/")
    .setTimestamp()
  
     message.channel.send(hostembed);
    
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.hosting used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
  name: "hosting"
}

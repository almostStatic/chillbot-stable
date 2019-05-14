const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    hostembed = new Discord.RichEmbed()
  
    .setTitle("Get the best bot/web hosting here!")
    .setColor("RANDOM")
    .setURL("https://www.seimaxim.com/")
    .setTimestamp()
  
     message.channel.send(hostembed);
    
     let used = new Discord.RichEmbed()
     .setAuthor(`Command Used:`, bot.user.avatarURL)
     .setColor(`#81868e`)
     .setDescription(`c.hosting used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
     bot.channels.get("575619138576318484").send(used)



}

module.exports.help = {
  name: "hosting"
}

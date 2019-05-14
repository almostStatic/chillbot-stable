const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.channel.type === "dm") return;
      let member = message.mentions.members.first();
    // // // // // // // // // // // // // // // /;
    let hugEmbed = new Discord.RichEmbed()
    
    .setDescription(`${message.author.tag} has hugged ${member.user.tag}`)
    .setColor('RANDOM')
    message.channel.send(hugEmbed)
      
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.hug used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

    

}

module.exports.help = {
  name: "hug"
}

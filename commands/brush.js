const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let white = "#ffffff"
    let brushEmbed = new Discord.RichEmbed()
    .setDescription(`${message.member.user.tag} has brushed their teeth and made them shine!`)
    .setColor(white);
    
    message.channel.send(brushEmbed);
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/brush used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
      //  const used = new Discord.RichEmbed()



    

}

module.exports.help = {
  name: "brush"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let brushEmbed = new Discord.RichEmbed()
    let white = "#ffffff"
    .setDescription(`${message.member.user.tag} has brushed their teeth and made them shine!`)
    .setColor(white);
    
    message.channel.send(brushEmbed);
    

}

module.exports.help = {
  name: "brush"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let ownerembed = new Discord.RichEmbed()
    .setDescription("**sad (Eclipse)#3728** is my owner! He coded every one of my lines!")
    .setColor("RANDOM")
// 431684183371415555
    message.channel.send(ownerembed);
  
    
}

module.exports.help = {
  name: "owner"
}

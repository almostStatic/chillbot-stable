const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.channel.type === "dm") return;
      let member = message.mentions.members.first();
    // // // // // // // // // // // // // // // /;
    let hugEmbed = new Discord.RichEmbed()
    
    .setDescription(`${message.author.tag} has hugged ${member.user.tag}`)
    .setColor('RANDOM')
    message.channel.send(hugEmbed)

    

}

module.exports.help = {
  name: "hug"
}
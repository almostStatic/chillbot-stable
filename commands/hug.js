const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.channel.type === "dm") return;
      let member = message.mentions.members.first();
    // // // // // // // // // // // // // // // /;
    let hugEmbed = new Discord.RichEmbed()
    
    .setDescription(`${message.author.tag} has hugged ${member.user.tag}`)
    .setColor('RANDOM')
    message.channel.send(hugEmbed)
      
          const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.hug used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id}), to hug ${member.user.tag}`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



    

}

module.exports.help = {
  name: "hug"
}

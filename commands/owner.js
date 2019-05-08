const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let ownerembed = new Discord.RichEmbed()
    .setDescription("**sad (Eclipse)#3728** is my owner! He coded every one of my lines!")
    .setColor("RANDOM")
// 431684183371415555
    
            const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.owner used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);
    message.channel.send(ownerembed);
  
    
}

module.exports.help = {
  name: "owner"
}

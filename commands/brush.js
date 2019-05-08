const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let brushEmbed = new Discord.RichEmbed()
    let white = "#ffffff"
    .setDescription(`${message.member.user.tag} has brushed their teeth and made them shine!`)
    .setColor(white);
    
    message.channel.send(brushEmbed);
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.brush used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);


    

}

module.exports.help = {
  name: "brush"
}

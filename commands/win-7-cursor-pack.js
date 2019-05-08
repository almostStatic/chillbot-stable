const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let aEmbed = new Discord.RichEmbed()
  
    .setTitle(`Here is a link to the default cursor pack (Windows 7 | GitHub)`)
    .setURL("https://github.com/asadhum2005/win7-cursor-pack")
    .setColor("RANDOM");
  
    message.channel.send({embed: aEmbed});
    
    const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.win-7-cursor-pack used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);

  
}

module.exports.help = {

    name: "win-7-cursor-pack"

}

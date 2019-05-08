const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.reply("This command is not availible for use in a DM Channel")

        everyone = new Discord.RichEmbed()
    .setTitle("You are not allowed to use this command!")
    .setColor("#ff0000")
    message.delete(0);
    
    
        if(!message.member.hasPermission('MENTION_EVERYONE')) return message.channel.send({embed: everyone});
        return message.channel.send(`<@${message.author.id}> mentioned @everyone!`)
  
      const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.mention-everyone used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);
      
    

}

module.exports.help = {
  name: "mention-everyone"
}

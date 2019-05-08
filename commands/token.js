const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


        howdumami = new Discord.RichEmbed()
        
        .setTitle("Here's my token...Keep it safe!")
        .setDescription("||JDDeyYUTyute444.2342545GRTHETfff.456yyyhfddyuit||")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!", member.user.avatarURL);
      
      message.channel.send(howdumami);
        
        const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.token used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);

      
}

module.exports.help = {
  name: "token"
}

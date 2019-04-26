const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


        howdumami = new Discord.RichEmbed()
        
        .setTitle("Here's my token...Keep it safe!")
        .setDescription("||JDDeyYUTyute444.2342545GRTHETfff.456yyyhfddyuit||")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!", member.user.avatarURL);
      
      message.channel.send(howdumami);
      
}

module.exports.help = {
  name: "token"
}
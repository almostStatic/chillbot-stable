const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


        howdumami = new Discord.RichEmbed()
        
        .setTitle("Here's my token...Keep it safe!")
        .setDescription("||JDDeyYUTyute444.2342545GRTHETfff.456yyyhfddyuit||")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!", member.user.avatarURL);
      
      message.channel.send(howdumami);
        
      let used = new Discord.RichEmbed()
      .setAuthor(`Command Used:`, bot.user.avatarURL)
      .setColor(`#81868e`)
      .setDescription(`c.token used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
      bot.channels.get("575619138576318484").send(used)

      
}

module.exports.help = {
  name: "token"
}

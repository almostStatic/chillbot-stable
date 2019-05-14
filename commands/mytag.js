const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let mytagembed = new Discord.RichEmbed()
    
        .setDescription("username#discrim + ID:")
        .setColor("#000000")
        .addField("username#discrim:", message.member.user.tag)
        .addField("Your Discord user ID:", message.author.id)
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!", message.author.avatarURL);
    // message.member.user.tag displays the user in form, user#discrim
        message.channel.send(mytagembed);
        
        let used = new Discord.RichEmbed()
        .setAuthor(`Command Used:`, bot.user.avatarURL)
        .setColor(`#81868e`)
        .setDescription(`c.mytag used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
        bot.channels.get("575619138576318484").send(used)
                                   
    

}

module.exports.help = {
  name: "mytag"
}

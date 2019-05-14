const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MENTION_EVERYONE")) return message.reply(":face_pain: Nope. :face_pain:")   
    message.channel.send(`<@${message.author.id}> has mentioned <@&573084849532043274>!`)
    
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.ma used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
}

module.exports.help = {
    name: "ma"
}

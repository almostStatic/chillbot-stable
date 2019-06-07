const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let members = message.guild.memberCount // ? idk if thats gonna work hmm
    
    const toSend = new Discord.RichEmbed()

    .setColor("#42f4ad")
    .addField("Humans", message.guild.members.filter(member => !member.user.bot).size, true)    
    .addField("Bots", message.guild.members.filter(member => member.user.bot).size, true)
    .setTimestamp()

    
    message.channel.send(toSend);
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.membercount used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: "membercount"
};

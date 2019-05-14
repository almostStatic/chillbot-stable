const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let members = message.guild.memberCount // ? idk if thats gonna work hmm
    
    const toSend = new Discord.RichEmbed()

    .setDescription(`We currently have **${members}** members! Keep working hard to invite more people!`)
    .setColor("RANDOM")
    .setFooter("Use c.invite to get an invite link to this server!")
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

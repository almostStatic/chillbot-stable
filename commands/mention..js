const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let toping = args.join(" ");

    message.channel.send(`${toping}, you have been summoned!`)

    if(!toping) return message.reply("Who should I ping?")
    
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/mention used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
}


module.exports.help = {
    name: "mention"
}

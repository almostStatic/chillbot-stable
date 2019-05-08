const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let prefixEmbed = new Discord.RichEmbed()
//                      Hey user#1234 my prefix...
    .setDescription("my prefix is `c.` and currently **__isn't changeable!__**")
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(prefixEmbed);
    
            const used = new Discord.RichEmbed()
    
    .setTitle("Command Used:")
    .setDescription(`c.pet <reason> used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
      bot.channels.get("575619138576318484").send(used);

}

module.exports.help = {
  name: "prefix"
}

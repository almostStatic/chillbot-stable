const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let guildname = message.guild.name;

    message.channel.send(`${guildname}`);
    
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.guildname used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
  name: "guildname"
}

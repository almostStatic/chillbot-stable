const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let id = message.guild.id;

    message.channel.send(`${id}`);
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.guildid used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
  name: "guildid"
}

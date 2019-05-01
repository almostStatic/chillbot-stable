const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let id = message.guild.id;

    message.channel.send(`${id}`);

}

module.exports.help = {
  name: "guildid"
}
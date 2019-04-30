const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let guildname = message.guild.name;

    message.channel.send(`${guildname}`);

}

module.exports.help = {
  name: "guildname"
}
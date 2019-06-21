const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    const bansList = message.guild.bans.map(e=>e.toString()).join(" ");
message.channel.send(bansList)

}

module.exports.help = {
    name: 'bans'
}
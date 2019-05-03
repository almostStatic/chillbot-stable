const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Invite people to this server using:** \n https://discord.gg/YUjuY6E`)

}

module.exports.help = {
    name: "invite"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Invite people to this server using:** \n https://discord.gg/WJCP3GK`)

}

module.exports.help = {
    name: "invite"
}
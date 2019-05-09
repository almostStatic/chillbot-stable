const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    bot.users.get("501710994293129216").send("**Webhook 1:** \n https://canary.discordapp.com/api/webhooks/576036949387902977/oEuqh2fJalhCIvAmPBgIUIGoswDYBS9YI8mH-HZ-L41AIowf0U-RaArYWrAlv6Si5S4v")

    message.channel.send("The webhook has been sent to sad (Eclipse)#3728")
    //  https://canary.discordapp.com/api/webhooks/576036949387902977/oEuqh2fJalhCIvAmPBgIUIGoswDYBS9YI8mH-HZ-L41AIowf0U-RaArYWrAlv6Si5S4v
}

module.exports.help = {
    name: "webhooks"
}
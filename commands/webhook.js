const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    bot.users.get("501710994293129216").send("**Webhook 1:** \n https://discordapp.com/api/webhooks/576040646998229012/dYLIwyv-txc81HVOoWGal6z9K2nDIC74k5jOG1CHQwBsfMtiFY-p9VJfzhYqugEeCPQf")

    message.channel.send("The webhook has been sent to sad (Eclipse)#3728")
    //  https://discordapp.com/api/webhooks/576040646998229012/dYLIwyv-txc81HVOoWGal6z9K2nDIC74k5jOG1CHQwBsfMtiFY-p9VJfzhYqugEeCPQf
}

module.exports.help = {
    name: "webhooks"
}
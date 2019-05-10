const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "") return message.reply(`Webhooks may only be accsessed by the bot owner or admins!`)
    bot.users.get("501710994293129216").send("**Webhook 1: (<#576040613724684308>)** \n https://discordapp.com/api/webhooks/576040646998229012/dYLIwyv-txc81HVOoWGal6z9K2nDIC74k5jOG1CHQwBsfMtiFY-p9VJfzhYqugEeCPQf \n **Webhook 2:** (<#576309027164913667>) \n https://discordapp.com/api/webhooks/576309069544030208/ns8SMk66u7G9XWeOQdpdYSb0qCQM_BwjuZtuM8bpQkeKkQk4-iOq8K5IRoiFYLHfO8C5")

    message.channel.send("The webhooks have been sent to sad (Eclipse)#3728")
    //  https://discordapp.com/api/webhooks/576040646998229012/dYLIwyv-txc81HVOoWGal6z9K2nDIC74k5jOG1CHQwBsfMtiFY-p9VJfzhYqugEeCPQf
}

module.exports.help = {
    name: "webhooks"
}
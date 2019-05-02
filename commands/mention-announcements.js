const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MENTION_EVERYONE")) return message.reply(":face_pain: Nope. :face_pain:")   
    message.channel.send(`<@${message.author.id}> has mentioned <@&573084849532043274>!`)
}

module.exports.help = {
    name: "ma"
}
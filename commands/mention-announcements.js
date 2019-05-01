const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(message.author.hasPermission("MENTION_EVERYONE")) return message.reply("You may not use this command!")
    id = message.author.id
    
    message.channel.send(`<@${id}> has mentioned <@&573084849532043274>`)
}

module.exports.help = {

    name: "mention-announcements"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var chid = args.join(" ").slice()
    var messageio = args.join(" ").slice(21)
    var generalChannel = bot.channels.get(chid) // Replace with known channel ID
    generalChannel.send(messageio);
// <#560553771353112577>

// /send-to <#560553771353112577> test
}

module.exports.help = {

    name: "send-to"
}
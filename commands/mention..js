const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let toping = args.join(" ");

    message.channel.send(`${toping}, you have been summoned!`)

    if(!toping) return message.reply("Who should I ping?")
}


module.exports.help = {
    name: "mention"
}

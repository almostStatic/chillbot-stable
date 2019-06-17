const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
var prefix = botconfig.prefixes;
module.exports.run = async(bot, message, args) => {
    let parsed = JSON.parse(prefix)
    let prefixesEmbed = new Discord.RichEmbed()
    .setTitle("Bot Prefixes")
    .addField("Prefixes:", '/\nbot.run>>\n/\n')

    message.channel.send({embed: prefixesEmbed});

}

module.exports.help = {
    name: 'prefixes'
}
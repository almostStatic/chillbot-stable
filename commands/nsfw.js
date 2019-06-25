const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    var embed = new Discord.RichEmbed()
    .setDescription("⚠️ These are NSFW Commands and will only work in NSFW Channels!")
    .setTitle("NSFW Commands")
    .setColor(0xf49b42)
    .addField("**/tits**", "See tits", true)
    .addField("**/ass**", "See someone's ass", true)

    message.channel.send({ embed })
};

module.exports.help = {
    name: 'nsfw',
};
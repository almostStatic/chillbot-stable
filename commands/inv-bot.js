const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    url = "https://discordapp.com/oauth2/authorize?client_id=572733004254937088&scope=bot&permissions=8";

    const embed = new Discord.RichEmbed()

    .setTitle("Invite me!")
    .setURL(url)
    .setFooter("THIS BOT IS OWNER-ONLY. YOU CAN'T INVITE IT TO YOUR SERVER!!")
    .setColor("RANDOM")

    message.channel.send(embed)
}

module.exports.help = {
    name: "inv"
}
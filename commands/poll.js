const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    /* correct usage:
    /poll TITLE OF THE EMBED | DESCRIPTIONOF THE EMBED
    */
    let title = args.join(" ");
    let description = message.content.split("|").join(" ").slice(title.length);
    console.log(description)

    let embed = new Discord.RichEmbed()
    .setTitle(title)
    .setDescription(description)

    message.channel.send({ embed })


};

module.exports.help = {
    name: 'poll'
}
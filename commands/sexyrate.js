const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    const sexyrate = Math.floor(Math.random() * 100)
    let mentioned = message.mentions.members.first();
    if (message.mentions.members.size <= 0){
       const embed1 = new Discord.RichEmbed()
            .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "I rate you a " + sexyrate + " out of 100!")
            .setThumbnail(mentioned.user.avatarURL)
            .setColor(mentioned.user.displayColor)
            .setTimestamp()
            .setFooter('Command | /sexyrate', mentioned.user.avatarURL)
       message.channel.send({ embed1 });
    } else {
        let e = new Discord.RichEmbed()
        .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "I rate you a " + sexyrate + " out of 100!")
        .setThumbnail(message.author.avatarURL)
        .setColor(message.member.displayColor)
        .setTimestamp()
        .setFooter('Command | /sexyrate', message.member.avatarURL)
        message.channel.send(e);
    };
};

module.exports.help = {
    name: 'sexyrate',
};
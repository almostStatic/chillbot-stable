const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    const sexyrate = Math.floor(Math.random() * 100)
    let mentioned = message.mentions.members.first();
    if(!mentioned) {
        mentioned = message.author;
    };
    if (message.mentions.members.size >= 1){
       const embed1 = new Discord.RichEmbed()
            .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "I rate you a " + sexyrate + " out of 100!")
            .setColor(mentioned.user.displayColor)
            .setTimestamp()
            .setFooter('Command | /sexyrate', mentioned.user.avatarURL)
      return message.channel.send({ embed1 });
    } 
    };


module.exports.help = {
    name: 'sexyrate',
};
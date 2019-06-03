const Discord = require("discord.js");

module.exports.run = async(bot, message, args)=>{
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
const embed = new Discord.RichEmbed()
.setTitle("Emojis")
.setDescription(emojiList)
.setColor("RANDOM")
  message.channel.send(embed);
}

module.exports.help = {
    name: 'emojis'
}
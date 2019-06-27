const Discord = require("discord.js");

module.exports.run = async(bot, message, args)=>{

const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
const embed = new Discord.RichEmbed()
.setTitle("Emojis")
.setDescription(emojiList)
.setColor("RANDOM")


  message.channel.send(embed)
    .catch(console.error);
  let used = new Discord.RichEmbed()
  .setAuthor(`Command Used:`, bot.user.avatarURL)
  .setColor(`#81868e`)
  .setDescription(`/emojis used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
  bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: 'emojis'
}
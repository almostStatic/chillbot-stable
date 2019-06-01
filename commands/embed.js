const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// 
// /embed #ff0000 <#channelname> [content]
// channel id length:
//<#570585605763891214>
//21
// user id length : 19
try {
  let hex = args[0];
  let channel = message.mentions.channels.first();
  let content = args.join(" ").slice(29);
  if(!channel) return message.reply("Invalid Syntax. Usage: `/embed <hex> <channel> <content>`")
    let embed = new Discord.RichEmbed()

    .setDescription(content)
    .setColor(hex)
    channel.send(embed)

} catch (err) {
message.channel.send(`Invalid Syntax: \n \`\`\`js ${err}\`\`\``)
}
let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`c.embed used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)


}

module.exports.help = {
  name: "embed"
}
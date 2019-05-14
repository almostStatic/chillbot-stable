const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

let sicon = message.guild.iconURL;
let serverembed = new Discord.RichEmbed()

.setTitle("Server Information")
.setColor("RANDOM")
.setThumbnail(sicon)
.addField("Server Name", message.guild.name)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount)
.setTimestamp()


 message.channel.send(serverembed);
 let used = new Discord.RichEmbed()
 .setAuthor(`Command Used:`, bot.user.avatarURL)
 .setColor(`#81868e`)
 .setDescription(`c.serverinfo used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
 bot.channels.get("575619138576318484").send(used)


}
 
module.exports.help = {
  name: "serverinfo"
}

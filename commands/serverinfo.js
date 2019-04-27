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
.setFooter("Use /invite to invite me to your server!");

return message.channel.send(serverembed);


}
 
module.exports.help = {
  name: "serverinfo"
}
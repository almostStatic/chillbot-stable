const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

  let nokuser = new Discord.RichEmbed()

    .setDescription(" You need to mention a user for this command to work!")
    .setColor("#ff0000")

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send(nokuser);

  let bEmbed = new Discord.RichEmbed()

    .setDescription(` 🔨 ${message.member.user.tag} has banished ${bUser.user.tag} from the server!`)
    .setColor("RANDOM")

    message.channel.send(bEmbed);

}

module.exports.help = {
  name: "banish"
}
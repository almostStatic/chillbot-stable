const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

    let notfound = new Discord.RichEmbed()

      .setDescription("❌ You need to mention a **user** for this command to work!")
      .setColor("#ff0000")

  let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!puser) return message.channel.send(notfound);


  let embed = new Discord.RichEmbed()

    .setDescription(`${message.member.user.tag} has polished ${puser.user.tag}!`)
    .setColor("RANDOM")

      message.channel.send(embed);
      message.channel.send(" ");

}

module.exports.help = {
  name: "polish"
}
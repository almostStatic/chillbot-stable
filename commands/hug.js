const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
  let usage = new Discord.RichEmbed()

  .setColor("#4c85e0")
  .setTitle("Usage:")
  .setDescription("**Command** /hug \n \n /hug @user <reason> \n /hug @Noob Sorry man \n /hug @someone <3 I'm here for ya")
  if(!member) return message.channel.send({embed: usage});

    let member = message.mentions.members.first();
    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`${message.member.user.tag} has hugged ${member.user.tag}`)
    .setColor('RANDOM')
    
    message.channel.send(hugEmbed)

}

module.exports.help = {
  name: "hug"
}
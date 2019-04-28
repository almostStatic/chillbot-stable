const Discord = require("discord.js")


module.exports.run = (client, message, args, level) => {
    let usage = new Discord.RichEmbed()

    .setColor("#4c85e0")
    .setTitle("Usage:")
    .setDescription("**Command** /kiss \n \n /kick @user \n /kiss @John Lovery boy \n /kiss @someone <3")
    
    let member = message.mentions.members.first()
    if(!member) return message.channel.send({embed: usage});
    let embed = new Discord.RichEmbed()

    .setTitle(`${message.member.user.tag} has kissed ${member.user.tag} 💖`)
    .setColor("RANDOM")

    message.channel.send(embed);
    message.channel.send(`Feel the love`)

};

module.exports.help = {
    name: "kiss"
  }
  
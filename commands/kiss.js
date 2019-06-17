const Discord = require("discord.js")


module.exports.run = (bot, message, args) => {
    let usage = new Discord.RichEmbed()

    .setColor("#4bf442")
    .setTitle("Usage:")
    .setDescription("**Command** c.kiss \n \n c.kick @user \n c.kiss @John Lover boy \n c.kiss @someone <3")
    
    let member = message.mentions.members.first()
     if(!member) return message.channel.send("user not found!");
   if(!args[0]) return message.channel.send({embed: usage});
   let embed = new Discord.RichEmbed()

    .setTitle(`${message.member.user.tag} has kissed ${member.user.tag} 💖`)
    .setColor("RANDOM")

    message.channel.send(embed);
    message.channel.send(`Feel the love <3`)

    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/kiss used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

};

module.exports.help = {
    name: "kiss"
  }
  
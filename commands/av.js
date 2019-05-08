const Discord = require("discord.js")


module.exports.run = (client, message, args, level) => {
  var sender = {
    user: message.author,
    member: message.member
}
var member = message.mentions.members.first() || message.guild.members.get(args[1]);
if (!member) {
    var embed = new Discord.RichEmbed()
        .setAuthor(`${sender.user.tag}'s avatar`)
        .setImage(message.author.displayAvatarURL)
        .setColor('RANDOM')
    message.channel.send(embed);
} else {
    var embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag}'s avatar`)
        .setImage(member.user.displayAvatarURL)
        .setColor('GOLD')
    message.channel.send(embed);
      const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.av used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);


}
return;
};

module.exports.help = {
    name: "av"
  }
  

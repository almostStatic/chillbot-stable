const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let iddir = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  let embed2 = new Discord.RichEmbed()

      .setTitle(`${message.member.user.tag}`)
      .setDescription(`${message.author.id}`)
      .setColor("RANDOM");

  if (message.mentions.users.size < 1) return message.channel.send(embed2);

    let embed = new Discord.RichEmbed()

      .setTitle(`${iddir.user.tag}`)
      .setDescription(`${iddir.user.id}`)
      .setColor("RANDOM")


        message.channel.send(embed);
        let used = new Discord.RichEmbed()
        .setAuthor(`Command Used:`, bot.user.avatarURL)
        .setColor(`#81868e`)
        .setDescription(`/id used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
        bot.channels.get("575619138576318484").send(used)



}

module.exports.help = {
  name: "id"
}

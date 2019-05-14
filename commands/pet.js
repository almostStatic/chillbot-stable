const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.reply("This command is not availible for use in a DM Channel")

    let notfound = new Discord.RichEmbed()

      .setDescription("❌ You need to mention a **user** for this command to work!")
      .setColor("#ff0000")
      if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

  let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!puser) return message.channel.send(notfound);
  let reason = args.join(" ").slice(22);
  if(!reason) return message.reply(`Please tell me why you wish to pet ${puser.user.tag}`)

  let embed = new Discord.RichEmbed()

    .setDescription(`${message.member.user.tag} has petted ${puser.user.tag} aww <3`)
    .addField("Reason:", reason)
    .setColor("RANDOM")

      message.channel.send(embed);
  
      let used = new Discord.RichEmbed()
      .setAuthor(`Command Used:`, bot.user.avatarURL)
      .setColor(`#81868e`)
      .setDescription(`c.pay used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
      bot.channels.get("575619138576318484").send(used)



}

module.exports.help = {
  name: "pet"
}

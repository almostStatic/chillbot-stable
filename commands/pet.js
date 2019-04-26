const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

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

}

module.exports.help = {
  name: "pet"
}

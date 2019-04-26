const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

if(message.author.id = "517730016520568853") return message.channel.send(`You can't punch me!`)

    let notfound = new Discord.RichEmbed()

      .setDescription("❌ You need to mention a **user** for this command to work!")
      .setColor("#ff0000")

  let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!puser) return message.channel.send(notfound);

  let embed = new Discord.RichEmbed()

    .setDescription(`${message.member.user.tag} has punched ${puser.user.tag} 👊`)
    .setColor("RANDOM")

      message.channel.send(embed);

}

module.exports.help = {
  name: "punch"
}

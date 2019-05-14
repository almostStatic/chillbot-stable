const Discord = require("discord.js");




module.exports.run = async (bot, message, args) => {

  let norole = new Discord.RichEmbed()
  .setDescription("❌ Role not found!")
  .setColor("#ff0000")

  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
  let roletocheck = args.join(" ")
  let role = bot.guilds.get(message.guild.id).roles.find('name', roletocheck);
  if (!role) return message.channel.send(norole)
    const embed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .addField('Role name', `${role.name}`, true)
    .addField('Role ID', `${role.id}`, true)
    .addField('Created At', role.createdAt.toDateString())
    .addField("Mentionable: ", role.mentionable ? 'Yes' : 'No')

    message.channel.send(embed);
  
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.roleinfo used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
  

}

module.exports.help = {
  name: "roleinfo"
}

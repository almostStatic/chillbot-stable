const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const usage = new Discord.RichEmbed()
  .setColor(0x00A2E8)
  .setThumbnail(bot.user.avatarURL)
  .setTitle("Command: " + "c." + "unban")
  .addField("Usage", "c." + "unban <ID> <reason>")
  .addField("Example", "c." + "unban 137624084572798976 wanted a unban <3")
  .setDescription("Description: " + "Unbans a user from the current server");
  if (message.member.hasPermission("BAN_MEMBERS")) {
    if (!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return message.reply('Sorry, i dont have the perms to do this cmd i need BAN_MEMBERS. :x:')
    let guy = args[0];
    if (isNaN(guy)) return message.channel.send(usage)
    let reason = args.slice(1).join(' ') || `Moderator didn't give a reason.`;
    let modlog = message.guild.channels.find('name', "bot-moderation-logs");
    if (reason.length < 1) return message.channel.send(usage)
    if (!guy) return message.channel.send(usage)
    if (guy === message.author.id) return message.channel.send(`:x: You can't unban yourself`);
    if (message.guild.members.get(guy)) return message.channel.send(`:x: That user is not banned from the server`);
    message.guild.unban(guy, 2);
    const unbannedEmbed = new Discord.RichEmbed()
   .setColor(0x00A2E8)
   .setTitle(`Action: Unban -> ${guy}`)
   .addField(`Ubanned User`, `<@${guy}> | ${guy}`)
   .addField("Unbanned By", `${message.author} | ${message.author.id}`)
   .addField("Unbanned At", message.createdAt.toDateString())
   .addField("Unbaned In", message.channel + " | " + message.channel.id)
   .addField("Reason", reason)
    message.channel.send(`<:GreenTick:580716592980164618> User \`${guy}\` (<@${guy}>) has been unbanned`)
    modlog.send(unbannedEmbed)
  }

  let used = new Discord.RichEmbed()
  .setAuthor(`Command Used:`, bot.user.avatarURL)
  .setColor(`#81868e`)
  .setDescription(`c.unban used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
  bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
  name: "unban"
}
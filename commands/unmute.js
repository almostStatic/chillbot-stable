const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Sorry pal, you can't do that.");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("Couldn't find that user, yo.");
let gRole = message.guild.roles.find(`name`, "Muted");
if(!gRole) return message.reply("Role `Muted` not found");

if(!rMember.roles.has(gRole.id)) return message.reply("That user is not muted. \n Mute them by using \n `c.mute @user-mention <reason>");
await(rMember.removeRole(gRole.id, `Unmute User: ${rMember.user.tag} \n Responsible User: ${message.author.tag}`));

try{
  await rMember.send(`You have been unmuted in ${message.guild.name}!`)
}catch(e){
  message.channel.send(`${rMember.user.tag} has been unmuted`)
}

let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`c.unmute used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
name: "unmute"
}
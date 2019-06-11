const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("<:RedCrossMark:582240944863313934> Sorry, you can't use this command!!");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("<:RedCrossMark:582240944863313934> I cannot find that user.");
let logs = message.guild.channels.find(`name`, "bot-moderation-logs");
let gRole = message.guild.roles.find(`name`, "Muted");
if(!gRole) return message.reply("<:RedCrossMark:582240944863313934> Role `Muted` not found");
let reason = args.join(" ").slice(22);
if(!reason){
  reason = 'no reason given'
}
let reasonEmbed = new Discord.RichEmbed()
.setDescription(`**Reason** ${reason}`)
if(!rMember.roles.has(gRole.id)) return message.reply("<:RedCrossMark:582240944863313934> That user is not muted. \n Mute them by using \n `c.mute @user-mention <reason>");
await(rMember.removeRole(gRole.id, `Unmute User: ${rMember.user.tag} \n Responsible User: ${message.author.tag}`));
// <:RedCrossMark:582240944863313934>
// <:GreenTick:580716592980164618>
rMember.send(`<:GreenTick:580716592980164618> You have been unmuted from ${message.guild.name}`)
  .catch(err =>{
    message.reply(err)
    message.channel.send('<:RedCrossMark:582240944863313934> I cannot send messages to that user')
  });
  let logsEmbed = new Discord.RichEmbed()
  .setTitle(`Action: Unmute -> ${rMember.user.tag}`)
  .setColor(0x123456)
  .addField('Unmuted By', message.author.tag + ' | ' + message.author.id)
  .addField('Unmuted User', rMember.user.tag + ' | ' + rMember.user.id)
  .addField("Unmuted In", message.channel, true)
  .addField("Unmuted At", message.createdAt.toDateString(), true)
  .addField("Reason", reason)
  .setTimestamp()
  .setFooter('User Unmuted', rMember.user.avatarURL)
  logs.send(logsEmbed);
message.channel.send(`<:GreenTick:580716592980164618> User \`${rMember.user.tag}\` has been unmuted`, reasonEmbed)
let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`c.unmute used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)

};

module.exports.help = {
name: "unmute",
};
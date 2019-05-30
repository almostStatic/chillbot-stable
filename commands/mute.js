const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    bot.on("error", e =>{
       message.reply(`Please contact an admin with error: \n ${e}`)
    });
    const usage = new Discord.RichEmbed()
    .setTitle("Usage: ")
    .setFooter("This command is mod only", message.author.avatarURL)
    .setDescription(`Use command in format: \n c.mute @user <reason>`)
    if(!args[0]){
        message.channel.send(usage)
    }
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(nopermsforu);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channnel.send(`Member not found`);
  let role = "<@&580744879756279808>";
  let reason = args.join(" ").slice(22);
  if (!reason) {
      reason = "no reason given"
  };
  let logsChannel = message.guild.channels.find(`name`, "bot-moderation-logs");
  if(!logsChannel){
    logsChannel = message.channel
  };
  if(!role) return message.channel.send(`**!ERR** __GuildRoles#find__  \n Mute role not found`);
  let gRole = message.guild.roles.find(`name`, "Muted");
  if(!gRole) return message.channel.send(`Role: **\`Muted\`** not found!`);

  if(rMember.roles.has(gRole.id)) return message.channel.send(`User ${rMember.user.tag} is **already muted**. \n You can unmute them by using the command \`c.unmute @user\``);
  await(rMember.addRole(gRole.id));
let reasonEmbed = new Discord.RichEmbed()
.setDescription(`**Reason:** ${reason}`)
.setTimestamp()

let muteEmbed = new Discord.RichEmbed()
.setTitle(`Action: Mute -> ${rMember.user.tag}`)
.addField(`Muted User`, `<@${rMember.id}> (${rMember.user.id})`, true)
.addField("Muted By", message.author + `(${message.author.id})`, true)
.addField("Muted In", message.channel)
.addField("Muted At", message.createdAt)
.addField("Reason", reason)


  try{
    await message.channel.send(`**User: ${rMember.user.tag} has been muted**`, reasonEmbed)
    await logsChannel.send(muteEmbed)
  }catch(e){
    message.channel.send(`There was an error: \`\`\`js\n${e}\n\`\`\` please contact \`sad (Eclipse)#3728\``)
    console.log(e.stack);
  }
  let used = new Discord.RichEmbed()
  .setAuthor(`Command Used:`, bot.user.avatarURL)
  .setColor(`#81868e`)
  .setDescription(`c.mute used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
  bot.channels.get("575619138576318484").send(used)
}


module.exports.help = {
  name: "mute"
}

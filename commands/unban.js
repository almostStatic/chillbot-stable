const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let ucantdo = new Discord.RichEmbed()

  .setDescription("❌ You do not have permissoin to use this command!")
  .setColor('#ff0000')

let nouserprovided = new Discord.RichEmbed()

  .setDescription("❌ Please provide a user for this command to work!")
  .setColor("#ff0000")

let icantdo = new Discord.RichEmbed()

  .setDescription("❌ I don't have permissions to do that! ")
  .setColor("#ff0000")

  
  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

    if(message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send(ucantdo);

  let bannedMember = await bot.fetchUser(args[0]);
    if(!bannedMember) return message.channel.send(nouserprovided)

  let ureason = args.slice(1).join (" ");
    if(!ureason) ureason = "No reason given";

    let unbanned = new Discord.RichEmbed()

    .setDescription(`${bannedMember.user.tag} has been unbanned!`)
    .setColor("#26b737")
  
if(message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send(icantdo);
  message.delete()

  try {
      message.guild.unban(bannedMember, {reason: ureason});
      message.channel.send(unbanned);

  } catch(e) {

    message.channel.send(e)
    console.log(e)
  }
const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.unban used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);

}

module.exports.help = {
  name: "unban"
}

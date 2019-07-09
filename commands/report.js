const Discord = require("discord.js");
const moment = require('moment');
module.exports.run = async (bot, message, args) => {


  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let rreason = args.join(" ").slice(22);
    let reportedAt = `${moment().format("YYYY-MM-DD HH:mm:ss")}`
    if(!rUser) return message.channel.send("Error 404: user not found... :(");
    let servername = message.guild.name;
    let reportEmbed = new Discord.RichEmbed()
    
    .setTitle(`Action: Report -> ${rUser.user.tag}`)
    .setColor("#ff0000")
    .addField("> Reported User", `${rUser}, (${rUser.id})`, true)
    .addField("> Reported By", `${message.author}, (${message.author.id})`, true)
    .addField("> Reported In", message.channel, true)
    .addField("> Reported At", reportedAt, true)
    .addField("> Reason", rreason)
    .setThumbnail(rUser.user.avatarURL)
    .setTimestamp()
    .setFooter(`> ID: ${rUser.user.id}`, message.author.avatarURL);

    let reportschannel = message.guild.channels.find(c=>c.name==='reports');
    if(!reportschannel) return message.channel.send(`❌ **Couldn't** find reports channel. Please contact an admin!`);


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    message.reply(`<:GreenTick:580716592980164618> **${rUser.user.tag}** has been reported!`)
    rUser.send(`You have been reported in **${servername}**! Here are the details:`, reportEmbed)
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/report used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

}
 
module.exports.help = {
  name: "report"
}

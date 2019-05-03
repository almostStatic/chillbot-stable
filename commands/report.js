const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let rreason = args.join(" ").slice(22);
    if(!rUser) return message.channel.send("Error 404: user not found... :(");
    let servername = message.guild.name;
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("~~---------~~ **__NEW REPORT!__**~~---------~~")
    .setColor("#ff0000")
    .addField("Reported User", `${rUser}, (${rUser.id})`, true)
    .addField("Reported By", `${message.author}, (${message.author.id})`, true)
    .addField("Channel", message.channel, true)
    .addField("Time", message.createdAt, true)
    .addField("Reason", rreason)
    .setTimestamp()

    let reportschannel = message.guild.channels.find(`name`, "reports");

    if(!reportschannel) return message.channel.send(`❌ **Couldn't find reports channel. Report has been send in <#${message.channel.id}>**`, reportEmbed);


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    message.reply("User has been reported.")
    rUser.send(`You have been reported in ${servername}. Here are the details:`, reportEmbed)

}
 
module.exports.help = {
  name: "report"
}
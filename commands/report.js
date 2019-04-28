const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let usage = new Discord.RichEmbed()

.setColor("#4c85e0")
.setTitle("Usage:")
.setDescription("**Command** /report \n \n /report @user <reason> \n /report @Noob being rude to me \n /report @someone spamming")


  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let rreason = args.join(" ").slice(22);
    if(!rUser) return message.channel.send({embed: usage});
    let servername = message.guild.name;
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("~~---------~~ **__NEW REPORT!__**~~---------~~")
    .setColor("#ff0000")
    .addField("Reported User", `${rUser}, (${rUser.id})`, true)
    .addField("Reported By", `${message.author}, (${message.author.id})`, true)
    .addField("Reported In", servername)
    .addField("Channel", message.channel, true)
    .addField("Time", message.createdAt, true)
    .addField("Reason", rreason)
    .setTimestamp()

    let reportschannel = message.guild.channels.find(`name`, "reports");

    if(!reportschannel) return message.channel.send(`❌ **Couldn't find reports channel. Report has been send in <#${message.channel.id}>**`, reportEmbed);


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    message.channel.send("User has been reported.")
    rUser.send(`You have been reported in ${servername}. Here are the details:`, reportEmbed)

}
 
module.exports.help = {
  name: "report"
}
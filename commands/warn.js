const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment')
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  // Correct Usage:
  // c.warn @user <reason>

  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
    let servername = message.guild.name;
    let warnedAt = `${moment().format("YYYY-MM-DD HH:mm:ss")}`
    let l = message.guild.emojis.find(emoji=>emoji.name === "loading")
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You need the manage server permission to use this command!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("User not found!");
    if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("They waaaay too kewl #Can'tWarnThem!");
    let reason = args.join(" ").slice(22);
    if(!reason) {//() => { // that is how an arrow function used
      reason = "no reason given";
    };

      if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
          };

    warns[wUser.id].warns++;

      fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
        });


    let warnEmbed = new Discord.RichEmbed()
    .setTitle(`Action: Warn -> ${wUser.user.tag}`)
    .setColor("#efc44f")
    .addField("> Warned User", `<@${wUser.id}> (${wUser.id})`, true)
    .addField("> Warned By", `${message.author} (${message.author.id})`, true)
    .addField("> Warned In", message.channel, true)
    .addField("> Warned At", warnedAt, true)
    .addField("> Number of Warnings", warns[wUser.id].warns, true)
    .addField("> Reason", reason)
    .setFooter(`> ID: ${wUser.id}`, wUser.user.avatarURL);

    let reasonEmbed = new Discord.RichEmbed()
    .setColor("#4dd6a3")
    .setDescription(`**Reason:** ${reason}`)
    .setFooter(`Number of warns: ${warns[wUser.id].warns}`, wUser.user.avatarURL)
    message.channel.send(`${l} Warning **${wUser.user.tag}**...`).then(async(msg) =>{
    let warnchannel = message.guild.channels.find(`name`, "bot-moderation-logs");
      if(!warnchannel) return message.reply("Couldn't find modlogs channel, I have logged the warning in **__this channel.__**", warnEmbed);
      message.delete();
      warnchannel.send(warnEmbed);
      wUser.send(`You were warned in **${message.guild.name}** by **${message.author.tag}**`, reasonEmbed)
      msg.edit(`<:GreenTick:580716592980164618> User: **${wUser.user.tag}** has been warned`, reasonEmbed);
  });
      let used = new Discord.RichEmbed()
        .setAuthor(`Command Used:`, bot.user.avatarURL)
        .setColor(`#81868e`)
        .setDescription(`/warn used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
        bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
  name: "warn",
};


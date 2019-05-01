const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  // Correct Usage:
  // /warn @user <reason>

  let usage = new Discord.RichEmbed()

    .setColor("#00ff00")
    .setTitle("Usage:")
    .setDescription("**Command** c.warn \n \n c.warn @user <reason> \n c.warn @Noob being rude to me \n c.warn @someone spamming")
  
  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
    let servername = message.guild.name;
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You need the manage server permission to use this command!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("User not found!");
    if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("They waaaay too kewl #Can'tWarnThem!");
    let reason = args.join(" ").slice(22);

      if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
          };

    warns[wUser.id].warns++;

      fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
        });

    let warnEmbed = new Discord.RichEmbed()
    .setTitle("~~-------~~ SOMEONE GOT WARNED ~~-------~~")
    .setDescription(`<@${message.author.id}> has warned ${wUser}`)
    .setColor("#ff0000")
    .addField("Warned User", `<@${wUser.id}> (${wUser.id})`, true)
    .addField("Warned In", message.channel, true)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);

    let warnchannel = message.guild.channels.find(`name`, "bot-moderation-logs");
      if(!warnchannel) return message.reply("Couldn't find modlogs channel, I have logged the warning in **__this channel.__**", warnEmbed);
      message.delete(0);
      message.channel.send(`:white_check_mark: Warned ${wUser.user.tag}`)
      warnchannel.send(warnEmbed);
        wUser.send(`You have been warned in ${servername}`, warnEmbed);


}

module.exports.help = {
  name: "warn"
};
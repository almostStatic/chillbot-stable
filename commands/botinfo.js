
  const Discord = require("discord.js");
  const bot = new Discord.Client();
  
module.exports.run = async (bot, message, args) => {

    coder = "sad (Eclipse)#3728";
    current = "**sad (Eclipse)#3728** is my current owner!";
    ron = "main.js";


    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    .addField("Bot Name", bot.user.username, true)
    .addField("Owner", 'sad (Eclipse)#3728', true)
    .addField("Memory Used", `**${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB USED**`, true)
    .addField("Created On", bot.user.createdAt.toDateString(), true)
    .addField("Discord.js Version", require('discord.js').version.toString(), true)
    .addField("Servers", bot.guilds.size, true)
    .addField("Method of coding", "Visual Studio Code | Discord.js (JavaScript)", true)
    .setTimestamp()

    message.channel.send(botembed);
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.botinfo used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)



}

module.exports.help = {
  name: "botinfo"
}

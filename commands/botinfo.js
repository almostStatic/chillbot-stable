
  const Discord = require("discord.js");
  const bot = new Discord.Client();
  
module.exports.run = async (bot, message, args) => {

    coder = "sad (Eclipse)#3728";
    current = "**sad (Eclipse)#3728** is my current owner!";
    ron = "main.js";
    bicon = bot.user.avatar_url

    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Coded By", coder)
    .addField("Owned by", current)
    .addField("Running on", ron)
    .addField("Servers", bot.guilds.size)
    .addField("Method of coding", "Visual Studio Code | Discord.js (JavaScript)")
    .setTimestamp()

    return message.channel.send(botembed);
      const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.botinfo used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
  name: "botinfo"
}

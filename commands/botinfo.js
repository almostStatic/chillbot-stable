
  const Discord = require("discord.js");
  const bot = new Discord.Client();
  
module.exports.run = async (bot, message, args) => {

    coder = "sad (Eclipse)#3728";
    current = "**sad (Eclipse)#3728** is my current owner!";
    ron = "main.js";
    bicon = bot.user.avatar_url

    let botembed = new Discord.RichEmbed()
    .setDescription("**__Bot Information__**")
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
    .setFooter("Use /invite to invite me to your server!");

    return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}

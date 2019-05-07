const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    if(message.author.id !== "501710994293129216") return message.reply("This is an owner-only command!")
    let tolog = args.join(" ");
    const logEmbed = new Discord.RichEmbed()


    .setDescription(tolog)
    .setColor("RANDOM")
    .setImage(message.author.avatarURL)
    .setTimestamp()

    let logChannel = message.guild.channels.find(`name`, "bot-logs");
    if(!logChannel) return message.channel.send("Can't find logs channel!");
    message.channel.send("Logged!")

}

module.exports.help = {
    name: "log"
}

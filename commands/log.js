const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    if(message.author.id !== "501710994293129216") return message.reply("This is an owner-only command!")
    let tolog = args.join(" ");
    const logEmbed = new Discord.RichEmbed()


    .setDescription(tolog)
    .setColor("RANDOM")
     .setThumbnail(message.author.avatarURL)
    .setTimestamp()

    let reportschannel = message.guild.channels.find(`name`, "bot-logs");
    if(!reportschannel) return message.reply("Can't find log channel!")
    reportschannel.send(logEmbed);

    message.channel.send("Logged!")

}

module.exports.help = {
    name: "log"
}

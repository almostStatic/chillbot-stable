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
        const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.log used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);

}

module.exports.help = {
    name: "log"
}

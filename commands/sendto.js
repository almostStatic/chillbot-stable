const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var chid = args.join(" ").slice()
    var messageio = args.join(" ").slice(21)
    var generalChannel = bot.channels.get(chid) // Replace with known channel ID
    generalChannel.send(messageio);
// <#560553771353112577>

// /send-to <#560553771353112577> test
    
    const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.send-to used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);

}

module.exports.help = {

    name: "send-to"
}

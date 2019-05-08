const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let toping = args.join(" ");

    message.channel.send(`${toping}, you have been summoned!`)

    if(!toping) return message.reply("Who should I ping?")
    
        const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.mention used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);
}


module.exports.help = {
    name: "mention"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MENTION_EVERYONE")) return message.reply(":face_pain: Nope. :face_pain:")   
    message.channel.send(`<@${message.author.id}> has mentioned <@&573084849532043274>!`)
    
        const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.ma used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);
}

module.exports.help = {
    name: "ma"
}

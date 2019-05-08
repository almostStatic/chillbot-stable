const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Invite people to this server using:** \n https://discord.gg/YUjuY6E`)
const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.invite used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
    name: "invite"
}

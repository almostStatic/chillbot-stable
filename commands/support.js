const Discord = require("discord.js");
const client  = new Discord.Client();

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()

.setDescription(`If you need any support, pleas edon't hesitate to DM sad (Eclipse)#3728`)
.setColor("#4bf442")

message.channel.send(embed);
let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`c.support used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: "support"
};

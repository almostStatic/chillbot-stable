const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const announcement = new Discord.RichEmbed()

.setTitle("Aboout this server:")
.addField(`This server is a server established for ${bot.user.username}!`, ` \n All his logs are logged and posted in this server. \n **LIST:** \n - <#575388934456999947> - Where the bot's start messages are logged \n - <#575390425259704320> - Errors \n - <#575393646946287616> - XP \n - <#575604330195845149> Where errors regarding the \`c.eval\` command are posted \n - <#575619138576318484> - Where the usage of **all** commands are logged \n - <#575658137005195266> - Where the changelog of the bot is posted \n You may use all other channels as you wish as long as you don't breech the Discord ToS!`)
.setColor("RANDOM")

message.channel.send(announcement);
let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`/cc used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)
}

module.exports.help = {
  name: "cc",
};
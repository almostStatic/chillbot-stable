const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// CORRECT USAGE:
//c.clog This has been logged on the console!!!!!! 

let tolog = args.join(" ");
console.log(tolog);
message.channel.send(`Attempted to log \`${tolog}\` on the console!`)
let used = new Discord.RichEmbed()
.setAuthor(`Command Used:`, bot.user.avatarURL)
.setColor(`#81868e`)
.setDescription(`c.clog used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
bot.channels.get("575619138576318484").send(used)



}

module.exports.help = {
    name: "clog",
};

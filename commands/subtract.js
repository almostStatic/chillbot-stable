const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let numberone = args[0];
    let numbertwo = args[1];
    let answer = numberone - numbertwo;
    let embed = new Discord.RichEmbed()
    .setDescription(answer);
    message.channel.send(`Calculating...`).then(a => a.edit(`Answer to ${numberone} - ${numbertwo}`, answer));
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.log used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: "subtract"
}
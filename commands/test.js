/*module.exports = class test {
constructor(){
  this.name = "test",
  this.alias = ['t'],
  this.usage = "/test | /t"
}
}

run(bot, message, args);{

  message.channel.send("New command Handler works!");

}
*/

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    test = new Discord.RichEmbed()
  
    .setDescription("**__I AM ALIVE!__**")
    .setColor("#765836")
  
    message.channel.send({embed: test});
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.test used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
  
}

module.exports.help = {
  name: "test"
}

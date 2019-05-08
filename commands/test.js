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
  const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.test used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);

  
}

module.exports.help = {
  name: "test"
}

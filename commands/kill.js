const Discord = require("discord.js")
client = new Discord.Client();

module.exports.run = (bot, message, args) => {

    if(message.author.id !== "501710994293129216") return message.reply("This is an owner-only command!");


    message.channel.send("Destroying current client...").then(sentMessage => sentMessage.edit("Current Client Status destroyed!"))
    client.destroy();

}

module.exports.help = {
    name: "kill"
  }
  
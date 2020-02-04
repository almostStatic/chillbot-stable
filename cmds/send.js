const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    if(["501710994293129216", "373900508026372097"]) {
      message.channel.send(args.join(" "))
  } else {
      message.delete();
  }
}

module.exports.help = {
   name: 'send'
}
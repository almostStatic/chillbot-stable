const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   // if(message.author.id !== "501710994293129216")return message.reply("Only the owner**s** cam use this commands!")


      const sayMessage = args.join(" ");
      if(!sayMessage) return message.reply("Make sure you tell me what you want me to say...")
      message.delete().catch();
      message.channel.send(sayMessage);

  // , "431684183371415555"

}

module.exports.help = {
  name: "tsay"
}
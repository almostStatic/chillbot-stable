const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   // if(message.author.id !== "501710994293129216")return message.reply("Only the owner**s** cam use this commands!")

  if(message.channel.type = "dm"){
    message.delete(50);
    console.log(`c.tsay attempted to be used in dms`)
    message.reply(`This command does not work in a dm channel`)
  }
   if(message.author.id === "437255943181565962") return message.reply(`Due to your recent actions, you have been blacklisted from using this command! \n \b \b \b \b`)
      const sayMessage = args.join(" ");
      if(!sayMessage) return message.reply("Make sure you tell me what you want me to say...")
      message.delete().catch();
      message.channel.send(sayMessage);
   
      let used = new Discord.RichEmbed()
      .setAuthor(`Command Used:`, bot.user.avatarURL)
      .setColor(`#81868e`)
      .setDescription(`c.tsay used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id} \n to get me to say: \`${sayMessage}\``)
      bot.channels.get("575619138576318484").send(used);
      
  // , "431684183371415555"

}

module.exports.help = {
  name: "tsay"
}

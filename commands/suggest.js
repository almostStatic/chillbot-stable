const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // Correct Usage:
  // c.suggest suggestion   

  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
    let servername = message.guild.name;
    let suggestor = message.author;
    let suggestion = args.join(" ");
    if(!suggestion) return message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Error",
        icon_url: bot.user.avatarURL
      },
      title: "You need to include a suggestion!",
      description: "**Usage:** \n c.suggest [your suggestion]",

      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL
      // text: "value"
      }
    }
  });


    let suggestEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor('New Suggestion', message.author.avatarURL)
    .addField("Suggestion By", `${suggestor} | (${suggestor.id})`, true)
    .addField("Suggestion At", message.createdAt.toDateString(), true)
    .addField("Suggestion In", message.channel, true)
    .addField("Suggestion", suggestion)
    .setTimestamp()
    .setFooter(`Suggestion #${message.id}`, bot.user.avatarURL)
    let suggestionChannel = message.guild.channels.find(`name`, "suggestions");
      if(!suggestionChannel) return message.reply("Couldn't find suggestions channel, I have logged the suggestion in **__this channel.__**", suggestEmbed);
      message.delete();
      suggestionChannel.send(suggestEmbed).then((msg)=> {
        setTimeout(function(){
          msg.react("580716592980164618"); //  react with a tick
          msg.react("582240944863313934"); // react with a cross
        }, 10)
      }); 
  
      message.channel.send(` <:GreenTick:580716592980164618> <@${message.author.id}>, Your suggestion has been sent to <#580715419803975681>!`)
      let used = new Discord.RichEmbed()
      .setAuthor(`Command Used:`, bot.user.avatarURL)
      .setColor(`#81868e`)
      .setDescription(`c.suggest used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
      bot.channels.get("575619138576318484").send(used)


}

module.exports.help = {
  name: "suggest"
};
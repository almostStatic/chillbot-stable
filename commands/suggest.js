const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // Correct Usage:
  // c.suggest suggestion   

  if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
    let servername = message.guild.name;
    let suggestor = message.author;
    let suggestion = args.join(" ");
    if(!suggestion) return message.channel.send(`WRONG FORMAT! Make sure you include your suggestion!`)


    let suggestEmbed = new Discord.RichEmbed()
    .setTitle("~~-------~~ NEW SUGGESTION !! ~~-------~~")
    .setDescription(`**READ ON  ...**`)
    .setColor("RANDOM")
    .addField("Suggestion By", `${suggestor} | (${suggestor.id})`, true)
    .addField("Suggestion At", message.createdAt, true)
    .addField("Suggestion In", message.channel, true)
    .addField("Suggestion", suggestion);


    let suggestionChannel = message.guild.channels.find(`name`, "suggestions");
      if(!suggestionChannel) return message.reply("Couldn't find suggestions channel, I have logged the suggestion in **__this channel.__**", suggestEmbed);
      message.delete(0);
      suggestionChannel.send(suggestEmbed);
      message.channel.send(`<@${message.author.id}>, Your suggestion has been sent to <#536185309000630284>!`)
       const used = new Discord.RichEmbed()

      .setTitle("Command Used:")
    .setDescription(`c.suggest <suggest> used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
      bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
  name: "suggest"
};

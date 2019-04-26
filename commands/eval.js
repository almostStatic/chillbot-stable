const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let gettingcommmands = new Discord.RichEmbed()

  .setDescription("Getting **Eval** commands...")

  let gotcmds = new Discord.RichEmbed()

  .setDescription("Translating...")

  let got = new Discord.RichEmbed()

  .setDescription("Got **Eval** commands!")


  if(message.author.id !== "501710994293129216") return message.reply("This is an owver-only command!");

  let cmds = new Discord.RichEmbed()

  .setTitle(`Eval Commands`)
  .setColor("RANDOM")
  .addField("**/eval**", "Get a list of eval commands")
  .addField("**/amiowner**", "See if I am the bot owner")
  .addField("**/reload <commandfile>**", "Reload a specific command. MUST HAVE THE FILE NAME. \n Do NOT need to include `.js`. Just command file name is required.")

  message.channel.send({embed: gettingcommmands}).then(sentMessage => sentMessage.edit({embed: gotcmds}).then(sentMessage => sentMessage.edit({embed: got})));
  message.channel.send({embed: cmds});

}

module.exports.help = {
  name: "eval"
}
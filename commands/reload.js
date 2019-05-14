const Discord = require("discord.js");


module.exports.run = (bot, message, args) => {

  let ucantdo = new Discord.RichEmbed()

  .setDescription("**This is an owner-only command.**")
  .setColor("RANDOM")

  if(message.author.id !== "501710994293129216") return message.channel.send({embed: ucantdo});

let notprovided = new Discord.RichEmbed()

.setDescription("Please provide a command name to reload!")
.setColor("#ff9d00")

let notthere = new Discord.RichEmbed()

.setDescription("That command does not exist!")
.setColor("#ff9d00")

  if(!args || args.size < 1) return message.channel.send({embed: notprovided});
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!bot.commands.has(commandName)) {
    return message.channel.send({embed: notthere});
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the bot.commands Enmap
  bot.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  bot.commands.set(commandName, props);
let reloaded = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`${commandName}.js reloaded!`)
  message.channel.send(reloaded);
  
  let used = new Discord.RichEmbed()
  .setAuthor(`Command Used:`, bot.user.avatarURL)
  .setColor(`#81868e`)
  .setDescription(`c.reload used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
  bot.channels.get("575619138576318484").send(used)
}

module.exports.help = {

  name: "reload"
}

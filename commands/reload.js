const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = (bot, message, args) => {
  let owners = ['137624084572798976', '501710994293129216']
  if(!owners.includes(message.author.id)) return message.reply('Only my masters may use this command!')

  try {
    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        message.channel.send(`Refreshed \`${files.length}\` commands successfully!`)
        let refreshEmbed = new Discord.RichEmbed()
        .setTitle(`Refreshed ${files.length} files!`, true)
        .addField("Files Refreshed", files.length, true)
        .addField("Refreshed By", message.author.tag, true)
        .addField("Refreshed At", message.createdAt.toDateString(), true)
        .addField("Channel", message.channel.name, true)
        .setTimestamp()
        .setFooter(`Files Refreshed`, message.author.avatarURL)
        .setThumbnail(bot.user.avatarURL)      
        bot.channels.get("586187654047989790").send(refreshEmbed)      
        files.forEach(file => {
             delete require.cache[require.resolve(`./${file}`)];
        });
    });
  } catch (err) {
        return;
      }
      
/*  let owners = ['137624084572798976', '501710994293129216'];
  if(!owners.includes(message.author.id)){
    message.delete(50);
    message.reply('This is an owner only command')
  }

  let ucantdo = new Discord.RichEmbed()

  .setDescription("**This is an owner-only command.**")
  .setColor("RANDOM")


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
  */
  let used = new Discord.RichEmbed()
  .setAuthor(`Command Used:`, bot.user.avatarURL)
  .setColor(`#81868e`)
  .setDescription(`c.reload used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
  bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {

  name: "reload"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const code = args.join(" ");
let usage = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Usage:")
  .setDescription("**Command** c.eval <code> \n \n TYPE:**OWNER-ONLY | PERMISSION LEVEL 10** \n \n Get the bot to run some code \n \n c.eval <code> \n c.eval message.channel.send(\"hiya\")")

  var owners = ["501710994293129216", "437255943181565962"] //(you can repeat this unlimiteed)
if(!owners.includes(message.author.id)) return message.channel.send("This is an owner-only command!")

  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  try {

    let evaled = eval(code);


    if(!code) return message.channel.send({embed: usage});

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), {code:"xl"});
  } catch (err) {
    // EVAL ERROR LOG CHANNEL ID: 575604330195845149
    const errorEmbed = new Discord.RichEmbed()

    .setTitle(`Error whilst exicuting the following code:`)
    .setDescription(`\n \`\`\`js\n${code}\`\`\` \n  \`\`\`xl\n${clean(err)}\n\`\`\``)
    .setColor("#ff0000")
    .setFooter(`Error made by: ${message.author.username}`, message.author.avatarURL)
    .setTimestamp()

    bot.channels.get("575604330195845149").send(errorEmbed);
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.eval used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);

  }
}


module.exports.help = {
  name: "eval"
}

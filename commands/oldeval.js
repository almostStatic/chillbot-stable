const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const code = args.join(" ");
let usage = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Usage:")
  .setDescription("**Command** /oldeval <code> \n \nThis command is outdated and its use is deprecated. Use `/eval`\n \n TYPE:**OWNER-ONLY | PERMISSION LEVEL 10** \n \n Get the bot to run some code \n \n /oldeval <code> \n /oldeval message.channel.send(\"hiya\")")

  let owners = ['137624084572798976', '501710994293129216', '586110954467491840']; // last id is my alt LMG__xD
  if(!owners.includes(message.author.id)){
    message.delete();
    return message.reply('You are not allowed to use this command')
  }
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

   
      message.channel.send(clean(evaled), {code:"xl"})
        
      const sucsess = new Discord.RichEmbed()

      .setTitle(`Eval Command Sucseeded!`)
      .setFooter(`Sucseeded by: ${message.author.username}#${message.author.discriminator} | ID: ${message.author.id}`)
      .setColor(0x43ef43)
      .setDescription(`Code run: \n\`\`\`js\n${code}\n\`\`\``)
      message.channel.send(sucsess);
  } catch (err) {
    // EVAL ERROR LOG CHANNEL ID: 575604330195845149
    const errorEmbed = new Discord.RichEmbed()

    .setTitle(`Error whilst exicuting the following code:`)
    .setDescription(`\n \`\`\`js\n${code}\`\`\` \n  \`\`\`xl\n${clean(err)}\n\`\`\``)
    .setColor("#ff0000")
    .setFooter(`Error made by: ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()

    bot.channels.get("575604330195845149").send(errorEmbed);
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``, errorEmbed);
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/oldeval used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

  };
};


module.exports.help = {
  name: "oldeval",
};
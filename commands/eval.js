const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let l = message.guild.emojis.find(emoji =>emoji.name === "loading")
  const code = args.join(" ");
let usage = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Usage:")
  .setDescription("**Command** /eval <code> \n \n TYPE:**OWNER-ONLY | PERMISSION LEVEL 10** \n \n Get the bot to run some code \n \n c.eval <code> \n c.eval message.channel.send(\"hiya\")")

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
    if(code == 'bot.token') return;

    if(!code) return message.channel.send({embed: usage});
    let e = new Discord.RichEmbed()
    .setDescription(`${l} **Processing your request...**`)
    if(typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
      if(code.length > 1000) return message.reply('Output too long\nFor full ouput, use `/oldeval`');
       message.channel.send(e).then(async(m) =>{
        const sucsess = new Discord.RichEmbed()

        .setTitle(`Eval Command Sucseeded!`)
        .setDescription(`Sucseeded by: ${message.author.username}#${message.author.discriminator} | ID: ${message.author.id}`)
        .setColor(0x43ef43)
        .addField('Input', `\`\`\`js\n${code}\n\`\`\``, true)
        .addField('Output', `\`\`\`js\n${clean(evaled)}\n\`\`\` (Eval)`)
        .setFooter(`NodeJS - Time Taken: ${Date.now() - message.createdTimestamp} MS`, message.author.avatarURL)
        .setTimestamp()    
    await m.edit(sucsess)
        .catch(err=>message.reply(`**Error:** ${err}`))
       });
  } catch (err) {
    // EVAL ERROR LOG CHANNEL ID: 575604330195845149
    const errorEmbed = new Discord.RichEmbed()

    .setTitle(`Error whilst exicuting the following code:`)
    .setDescription(`\n \`\`\`js\n${code}\`\`\` \n  \`\`\`xl\n${clean(err)}\n\`\`\``)
    .setColor("#ff0000")
    .setFooter(`Error made by: ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()

    bot.channels.get("575604330195845149").send(errorEmbed);
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/eval used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

  };
};


module.exports.help = {
  name: "eval",
};
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "501710994293129216") return message.channel.send("This is an owner-only command!")
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  try {
    const code = args.join(" ");
    let evaled = eval(code);

      let nocode = new Discord.RichEmbed()

      .setDescription("Plese provide some code for me to run!")
      .setColor(`RANDOM`)

    if(!code) return message.channel.send({embed: nocode});

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), {code:"xl"});
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}


module.exports.help = {
  name: "eval"
}
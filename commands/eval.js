const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "501710994293129216") return message.channel.send("This is an owner-only command!")

  try {
    const code = args.join(" ");
    let evaled = eval(code);

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
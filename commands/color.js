const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    let color = args[0];
    if(!color){
    let usage = new Discord.RichEmbed()
    .setTitle('Usage')
    .setDescription("c.color [color] \nTYPE: **hex**\n")
   return message.channel.send(usage);
    };
    let colorEmbed = new Discord.RichEmbed()
    .setTitle(`Color ${color}`)
    .setColor(color)

    message.channel.send(colorEmbed)
        .catch(err => {
            message.reply(`That is not a valid colour! See the error for more details. \n\`\`\`js\n${err}\n\`\`\``)
        });
};

module.exports.help = {
    name: 'color',
};
/*
const fs = require("fs");
exports.run = (client, message, args) => {
      if (message.author.id !== "137624084572798976") return message.channel.send("Only my owner can use this command");
      try {
    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        message.channel.send(`Refreshed \`${files.length}\` commands successfully!`)
        client.channels.get("544290801216126976").send(`Refreshed ${files.length} commands`)
        files.forEach(file => {
             delete require.cache[require.resolve(`./${file}`)];
        });
    });
  } catch (err) {
        return;
      }
};
*/
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
*/
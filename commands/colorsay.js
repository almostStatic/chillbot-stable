const Discord = require('discord.js');

module.exports.run=async(bot,message,args)=>{
    const color = args[0];

    if(!color){
        return message.reply('Please provide a color in hex format `#087654`', usage)
    }
    const toSay = args.join(' ').slice(args[0].length)
    if(!toSay){
        return message.reply('Please make sure you provide something for me to say', usage)
    }

    const usage = new Discord.RichEmbed()
    .setTitle('Usage: ')
    .setDescription('**/colorsay [hex color] [message]**', true)
    .addField('Example', '/colorsay #ff0000 hey guys! How are you???', true)
    .setTimestamp()
    .setColor('#098765')

    let say = new Discord.RichEmbed()
    .setColor(color)
    .setDescription(toSay)

        message.channel.send({embed: say})
            .catch(err =>{
                message.channel.send(`Error: \`${err}\``)
            });
}

module.exports.help = {
    name: 'colorsay'
}
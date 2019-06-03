const Discord = require("discord.js");

module.exports.run = async(bot, message, args)=>{
    if(!message.member.hasPermission('MANAGE_GUILD')){
        message.delete(50);
        message.reply('Only admins can use this command to fix mute')
    }
    message.guild.channels.forEach((channels) => {
        channels.overwritePermissions('584164297655975983', {
            'VIEW_CHANNEL': true,
            'SEND_MESSAGES': false, 
            'READ_MESSAGE_HISTORY': true
        });
    });

    await message.reply('Sucsessfully overwritten channel permissoins for the `muted` role to not be able to send messages!')
}

module.exports.help = {
    name: 'fixmute.all'
}
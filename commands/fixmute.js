const Discord = require("discord.js");

module.exports.run = async(bot, message, args)=>{
    if(!message.member.hasPermission('MANAGE_GUILD')){
        message.delete(50);
        message.reply('Only staff can use this command to fix mute')
    }
    message.guild.channels.forEach((channels) => {
        channels.overwritePermissions('584164297655975983', {
            'VIEW_CHANNEL': true,
            'SEND_MESSAGES': false,
            'READ_MESSAGE_HISTORY': true,
            'ADD_REACTIONS': false
        });
    });
    message.reply(`Overwriting channel permissions... Please Wait...`).then((msg)=> {
        setTimeout(function(){
            msg.edit('Sucsessfully changed permissions for channes! The mute role may no longer sned messages, or react to them!')
        }, 3000)
      }); 
}

module.exports.help = {
    name: 'fixmute.all'
}
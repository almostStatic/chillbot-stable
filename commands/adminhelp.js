const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
if(!message.member.hasPermission('ADMINISTRATOR')){
    message.reply('Only admins have access to this command')
    message.delete(50);
    };

    let adminhelp = new Discord.RichEmbed()
    .setTitle('Admin Commands')
    .setColor(0x42f4dc)
    .setDescription("This set of commands is very important and may be used in administrative tasks regarding the server")
    .setFooter('Admin Commands', message.author.avatarURL)
    .addField('**c.fixmute.all**', 'In this command, the bot will overwrite permissions for all channels so that the mute role may not send messages')
    .addField("**c.perms**", 'Command coming soon.')
    .addField("**c.give-admin**", 'give another user admin perms')
    .addField("**c.edit [channel mention] [message id] [new value]**", 'get the bot to edit a message authored byy the bot')
    message.member.send(adminhelp)
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.adminhelp used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get('575619138576318484').send(used);
}
module.exports.help = {
    name: 'adminhelp'
}
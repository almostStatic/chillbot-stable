const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    var owners = ['501710994293129216', '137624084572798976']
    if(!owners.includes(message.author.id)){
        return message.reply('You may not emit events!')
    }
    let a = args[0];
    let o = args[1];
    if(!a || !onanimationcancel){
        return message.reply(`
        You need to include a valid emit format. For Example:
        \`/emit guildMemberAdd message.member\`
        `)
    };
    bot.emit(a, o)
        .catch( err=>{
            message.channel.send(err);
        });
        let used = new Discord.RichEmbed()
        .setAuthor(`Command Used:`, bot.user.avatarURL)
        .setColor(`#81868e`)
        .setDescription(`/emit used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
        bot.channels.get("575619138576318484").send(used)
    
};

module.exports.help = {
    name: 'emit'
}
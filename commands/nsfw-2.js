const Discord = require('discord.js');
const rp = require('request-promise-native')

module.exports.run = async(bot, message, args) =>{
if (!message.channel.nsfw) return message.channel.send("Use #nsfw for this command!\n(we may add more nsfw channels soon)")
if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply('Sorry, i dont have the perms to do this cmd i need ATTACH_FILES. :x:')
return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.obutts.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {
   if (message.channel.nsfw) return message.channel.send(`NSFW | Requested By: ${message.author.tag}`, { files: [{ attachment: res, name: 'ass.png' }] }).catch(console.error);
});
};

module.exports.help = {
    name: 'ass',
};
const Discord = require("discord.js");
const rp = require('request-promise-native')

module.exports.run = async(bot, message, args) =>{
    if (!message.channel.nsfw) return message.channel.send("Cannot send NSFW content in a SFW channel.")
    if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply('Sorry, i dont have the perms to do this cmd i need ATTACH_FILES. :x:')
      return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
          return rp.get({
              url:'http://media.oboobs.ru/' + res[0].preview,
              encoding: null
          });
        }).then(function(res)   {
          if (message.channel.nsfw) return message.channel.send({ files: [{ attachment: res, name: 'tits.png' }] }).catch(console.error);
      });
};

module.exports.help = {
    name: 'tits',
};
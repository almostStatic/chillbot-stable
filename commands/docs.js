const Discord = require('discord.js');
const fetch = require('node-fetch');
const qs = require('querystring')

module.exports.run = async(bot, message, args) =>{

    const queryString = args.join(" ")
    const res = await fetch(`https://djsdocs.sorta.moe/v2/embed?${queryString}`);
    const embed = await res.json();
    
    if(!queryString){
        return message.reply(`
        Please include a search term. Example:
        \`/docs client\`
        `);
    };
    if (!embed) {
        return message.reply(`${bot.user.username} **couldn't** find the requested information.\nMaybe look for something that actually exists next time?`);
    };

    await message.channel.send({ embed });
          //  >docs client
};

module.exports.help = {
    name: 'docs',
};

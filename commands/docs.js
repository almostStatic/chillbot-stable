const Discord = require('discord.js');
const fetch = require('node-fetch');
const qs = require('querystring')

module.exports.run = async(bot, message, args) =>{

    const queryString = args.join(" ")
    const res = await fetch(`https://djsdocs.sorta.moe/main/stable/embed?q=${queryString}`);
    const embed = await res.json();
    if (!embed) {
        return message.reply("I couldn't find the requested information. Maybe look for something that actually exists the next time!");
    }
    if (message.channel.type === 'dm'){
        return message.channel.send({ embed });
    }

    await message.channel.send({ embed });
          //  >docs client
};

module.exports.help = {
    name: 'docs',
};

/*

Make a request to this url, replacing the placeholders based on documentation you want to access:

project: main, rpc, commando 
branch: master, stable (only for main)

:information_source: A "queryString" is basically an URL encoded string, see https://github.com/TeeSeal/discord.js-docs-api for the full API documentation

*/
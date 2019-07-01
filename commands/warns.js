const Discord = require('discord.js');
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) =>{
    if (!message.member.hasPermission('MANAGE_GUILD')) {
        return message.channel.send(`You can not use this command!`)
    };
    let wUser = message.mentions.members.first();
    
    
    if (warns[wUser.id].warns >= 0) {
        let w = warns[wUser.id].warns;
        return message.channel.send(`<:blobpolice:590900425318989826> | **${wUser.user.tag}** has ${w} warnings`)
    };
};

module.exports.help = {
    name: 'warns'
}
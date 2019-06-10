const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    let toSend = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!toSend) return message.reply('You need to provide a user.')
    let partnerAd = new Discord.RichEmbed()
    .setTitle('Our Partner Ad for Chat and Chill')
    .setDescription(`\`\`\`
    ========================================
    :tada: Hey! Welcome to *Chat and Chill*!
    
       - We have ***our own custom bot!***
       - We have relaxed rules
       - We'll sponsor your bot and advertise it for you!
       - We are open for partnerships and don't have any requirements
       - Come for a great time and a bunch of memes!!!
       - **Need help with coding your discord bot?** In our custom bot we have a command that lets you search the Discord.js docs in a simple command 
       - Our server region is set to London!!!!
    ========================================
    Join Here: https://discord.gg/HNas9Ax
    ========================================
    \`\`\`
    `)
    .setTimestamp()

    toSend.send(partnerAd)
        .catch(err => {
            return message.channel.send(`<:RedCrossMark:582240944863313934> ${toSend} has not got their DMs enabled. Here is the full error message:\n\`\`\`js\n${err}\n\`\`\``)
        });
            message.channel.send(`<:GreenTick:580716592980164618> Server ad sent to ${toSend.user.tag}!`)

};

module.exports.help = {
    name: 'send-ad'
}
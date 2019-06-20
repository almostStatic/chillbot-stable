const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    let toSend = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let partnerAd = new Discord.RichEmbed()
    .setTitle('Our Partner Ad for Chat and Chill')
    .setDescription(`\`\`\` 
    **__Come and join today!__**
    
    \`\`\`asciidoc
    = Welcome to Chat and Chill! =
    [Here's what we have to offer]:
    \`\`\` \`\`\`diff
    + We have our own custom bot! --- That's there to help you
    + We are looking for partners! (No partner requirements)
    + We'll sponsor your bot and advertise it for you!
    + We have relaxed rules... why not join?
    + We also provide support if you need help making your own discord bot!
    + Our server region is London!
    
    - We do NOT tolerate bullying or any sort of racisim. This can sometimes be dismissed
    
    --- We are not a full NSFW server but we do have NSFW Channels
    --- Server Owner: sad (Eclipse)#3728
      \`\`\` \`\`\`asciidoc
    = Interested? =
    [Join Here: https://discord.gg/HNas9Ax]
    = Come and have a great time! =
    
    \`\`\`
    `)
    .setTimestamp()
    if(message.mentions.members.size = 1){
        return message.channel.send(`
        A mention was not provided.
        The partner ad will be sent to the channel instead
        `, partnerAd)
    }
    toSend.send(partnerAd)
        .catch(err => {
            return message.channel.send(`<:RedCrossMark:582240944863313934> ${toSend} has not got their DMs enabled. Here is the full error message:\n\`\`\`js\n${err}\n\`\`\``)
        });
            message.channel.send(`<:GreenTick:580716592980164618> Server ad sent to ${toSend.user.tag}!`)

};

module.exports.help = {
    name: 'send-ad',
};
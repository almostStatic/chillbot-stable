const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let reason = args.join(" ")
    if(!reason){
        return;
    }
    everyone = "507889693816520724";
    let embed = new Discord.RichEmbed()
    .setTitle(`Your Inquiry: ${reason}`)

    message.guild.createChannel(`${message.member.user.tag}`, { parent: "582255605058764801"}, {
      permissionOverwrites: [{
        id: message.guild.id, 
        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        allow: ['SEND_MESSAGES']
      },
      {
        id: message.author.id,
        allow: ['MANAGE_CHANNEL', 'VIEW_CHANNEL', 'SEND_MESSAGES'],
        deny: ['MANAGE_MESSAGES']
      },
      {
        id: '580683463976419344',
        allow: ['MANAGE_CHANNEL', 'MANAGE_MESSAGES']
      }
    ]
    }).then(madeChannel => {
      message.channel.send(`${message.author}, your ticket has been created! ${madeChannel}`)
      madeChannel.send(`Hello ${message.author}!\nOur staff team will contact you here as soon as possible!\n<@/&//580683463976419344> (Please do not mention our staff as I have already done so!)`, embed)
    });


    /*).then(ch => ch.setTopic(reason)).then((channel)=> {
        setTimeout(function(){
            // Actions
           channel.overwritePermissions(everyone, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
          });
          channel.overwritePermissions(message.author, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            MANAGE_CHANNEL: true,
          });
          
            channel.send(`Hello ${message.author}! Thank you for contacting our mod team! \n We will respond to you here as soon as possible. \n Only you and the staff team have access to **this** channel!`, embed)
            channel.send(`<@&580683463976419344>, new case **#${message.id}** \n I have granted staff members (and ${message.author}) permissions to remove this channel once used. ${message.member.user.tag}, you may delete this channel if you wish. `)
            message.channel.send("Resolving...").then(a => a.edit(` <:GreenTick:580716592980164618> ${message.author} Your ticket has been created <#${channel.id}>`));

        }, 3000)
*/
//      }); 

    
    // <@&580683463976419344>

};


module.exports.help = {
    name: "new",
};
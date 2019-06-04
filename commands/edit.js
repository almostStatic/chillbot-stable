const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let channel = message.mentions.channels.first();
    let msg = args[1];
    let toedit = args.join(" ").slice(22 + msg.length)
    if(!channel){
        message.reply('You must mention a channel!')
    }
    if(isNaN(msg)){
        message.reply("Please provide a valid message id")
    }
    let eddited = new Discord.RichEmbed()
    .setTitle("Message Edited")
    .setThumbnail(bot.user.avatarURL)
    .setColor(0x42f4eb)
    .setFooter('Message Edited')
    .setTimestamp()
    .addField('Message ID', msg, true)
    .addField("Channel", channel, true)
    .addField("New Value", toedit, true)
    .addField('Responsible User', message.author.tag + ' | ' + message.author.id, true)
    try {
    channel.fetchMessages({around: msg, limit: 1})
  .then(messages => {
    const fetchedMsg = messages.first(); // messages is a collection!
    fetchedMsg.edit(toedit)
  });
  message.channel.send({embed: eddited});
}catch(e){
    message.reply('There was an error')
    console.error()
    message.channel.send(e)
}


  /* usage 
    bot>edit #chat 15784754975984375134 testing
  */
}

module.exports.help = {
    name: 'edit'
}
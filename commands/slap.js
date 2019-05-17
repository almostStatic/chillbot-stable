const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`You have to wait 5 seconds to slap someone else!`)
} else {

       // the user can type the command ... your command code goes here :)
       let slapper = message.author;
       let sUser = message.mentions.members.first();
       if(!sUser) {
           message.reply(`You need to mention someone to slap!`)
           console.log(`${message.author.user.username + "#" + message.author.discriminator} didn't mention someone to slap! oof!`)
       }
   
       let slapEmbed = new Discord.RichEmbed()
       .setDescription(`${slapper.username}#${slapper.discriminator} has slapped ${sUser.user.tag}!`)
       .setColor("RANDOM")
   
           message.channel.send("oof", slapEmbed)
   
    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 5000);
}};

module.exports.help = {
    name: "slap"
}
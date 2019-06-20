const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    let announcementsRole = '<@&580722037467906074>';
    let wave = message.guild.emojis.find(emoji =>emoji.name === "wave");
    let blobsweats = message.guild.emojis.find(emoji => emoji.name === "blobsweats");
message.channel.send(`
Hey **annoncement[mention]** ${wave}!
 Our server ad has **changed**. Use \`ob!preview\` to see the **new** ad!
 


**Reminders:**
  + You can report users who you think are breaking the rules. (\`/report @user <reason>\`)
  + You can suggest things with the server by using the command \`/suggest [reason]\`
  + **Remember**: You can always mention mods if you need help!


  `);
};

module.exports.help = {
    name: 'announce',
};
const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    let announcementsRole = '<@&580722037467906074>';
    let rainbowBlob = message.guild.emojis.find(emoji=>emoji.name === "rainblob")
    let meowHero = message.guild.emojis.find(emoji =>emoji.name === "meowhero")
    let blobHyper = message.guild.emojis.find(emoji=>emoji.name === "blobhyper")
    let wave = message.guild.emojis.find(emoji =>emoji.name === "awave");
   let blobsweats = message.guild.emojis.find(emoji => emoji.name === "blobsweats");
message.channel.send(`
Hey **${announcementsRole}** ${wave}!
 Our server rules have been **updated**! These rules are here to protect all of us!
  **We're looking for staff!!!** (Look at the rules for the link) ${blobHyper}
 
  Our server ad has **changed**. Use \`ob!preview\` to see the **new** ad!
  Our bot has had an update! **WHOOOOAAAHH!** 
 
  We've also added a bunch new **Emoji!** Try then out for yourself! 
 
   We want to make our server more colourful, please let us know by suggesting! (Read beow to see how to suggest)

  **Bot Updates:**
    - We have added NSFW Commands. To see a lsit, use \`/nsfw\` (They only work in #nsfw)
    - Updated Mod Commands (The bot looks more modern now)
    - If you found any bugs, please report them to \`sad (Eclipse)#3728\`

    **Reminders:**
  + You can report users who you think are breaking the rules. (\`/report @user <reason>\`)
  + You can suggest things with the server by using the command \`/suggest [reason]\`
  + **Remember**: You can always mention mods if you need help!
  `)
    .catch(err=>{
      message.channel.send(err)
    });
};

module.exports.help = {
    name: 'announce',
};
const Discord = require("discord.js");
const client  = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    serverinvurl = "https://discord.gg/2dbQt8d";
    invurl = "https://discordapp.com/oauth2/authorize?client_id=517730016520568853&scope=bot&permissions=8";

    let embed = new Discord.RichEmbed()    // Created an EMBED and storing it in "embed"

    .setTitle("Support Server")
    .setURL(serverinvurl)
    .setDescription("There is a link to join my support server **above**. \n ```css\nYou may join my support server ust to say hi, or to come and ask some questions We are here to help you in making the bot a better experience for everyone. \n You may also join my support server if you wanna submit a suggestion on something that can be added to the bot. \n PLEASE NOTE: \n Highlighting any major bugs in the bot can be very helpful. You might also be rewarded with special permission regarding the bot. \n Use /invite to invite me to your server!\n```")
    .setFooter("Any help or feedback would be extremelly appreciated!", bot.avatarURL)
    .setTimestamp()
    .addField("Bot Invite URL", invurl)
    .setColor("#ff0000")

    message.channel.send(embed);

}

module.exports.help = {
    name: "support"
}
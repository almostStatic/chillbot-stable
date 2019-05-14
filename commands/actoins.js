const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")){
        message.delete(50);
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: "No Perms",
              icon_url: bot.user.avatarURL
            },

            timestamp: new Date(),
            footer: {
              icon_url: bot.user.avatarURL,
              text: "./ \b You need the Manage Guild permission to use this command! \b \."
            }
          }
        });
    }



    let link = "https://cdn.discordapp.com/attachments/577411196731260932/577785400261738496/autoactions.png";
    const embed = new Discord.RichEmbed()
    .setTitle(`Automated Actions`)
    .setDescription("These are the actions that are put in place and will be automatically excicuted if moderators are not able to handle the situation")
    .setColor("RANDOM")
    .setImage(link)
    .setFooter("These are very important!", message.author.avatarURL)
    .setTimestamp()

    if(message.mentions.members.size <1 ) {
         message.channel.send(embed);
    }
    message.delete(50);

    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`c.actions used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.ud}`)
    bot.channels.get("575619138576318484").send(used)
}

module.exports.help = {
    name: "actions",
};
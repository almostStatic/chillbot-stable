const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let bicon = bot.user.displayAvatarURL;
        const inviteEmbed = new Discord.RichEmbed()
        .setTitle("Invite Me!")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=517730016520568853&scope=bot&permissions=8")
        .setThumbnail(bicon);
        
        return message.channel.send(inviteEmbed);
  
}

module.exports.help = {
  name: `invbot`
}

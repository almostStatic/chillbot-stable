const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const no = new Discord.RichEmbed()

.setDescription("This command has been restricted to the bot owners/managers to prevent the missuse of this command.")
.setColor("RANDOM")

    if(message.author.id !== "501710994293129216") return message.channel.send(no)
    let sendto = message.mentions.members.first();
    if(!sendto) return message.channel.send("You need to mention a user for this command to work!")
    const sayMessage = args.join(" ").slice(22);

    try{
    sendto.send(sayMessage)
        .catch(err =>{
            message.channel.send(`**Error** whilst DMing ${sendto.user.tag}:\n\`\`\`js\n${err}\n\`\`\``)
        });
    }catch(e){
        message.reply(`${err} I couldn't DM ${sendto.user.tag}`)
    }
            if(!err) return message.chanel.send(`Your message has been sent to ${sendto.user.tag}!`) 

    message.delete();

    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/dm used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

    

}

module.exports.help = {
  name: "dm"
}

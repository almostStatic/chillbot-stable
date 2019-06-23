const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let members = message.guild.memberCount // ? idk if thats gonna work hmm
    let l = message.guild.emojis.find(emoji => emoji.name === "loading")
    let tick = message.guild.emojis.find(emoji => emoji.name === "tick")
    const toSend = new Discord.RichEmbed()

    .setColor(message.member.displayColor)
    .addField("Humans", message.guild.members.filter(member => !member.user.bot).size, true)    
    .addField("Bots", message.guild.members.filter(member => member.user.bot).size, true)
    .addField("Total", message.guild.memberCount, true)
    .setTimestamp()

    let emb = new Discord.RichEmbed()
    .setDescription(`${l} Fetching server info...`)
    

    
    message.channel.send(emb).then(async(msg) =>{
        await msg.edit(toSend)
            .catch(err=>message.reply(err));
    });
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/membercount used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: "membercount"
};

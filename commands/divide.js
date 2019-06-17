const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let numberone = args[0];
    let numbertwo = args[1];
    let answer = numberone / numbertwo;

    if(!args[0] || !args[1]){
        return message.channel.send("<:RedCrossMark:582240944863313934> You need to include numbers")
    }
    if(isNaN(numberone)){
        return message.channel.send("<:RedCrossMark:582240944863313934> You may only include numbers")
    }
    if(isNaN(numbertwo)){
        return message.reply("<:RedCrossMark:582240944863313934> You may only include numbers")
    }
    if(isNaN(answer)){
        return message.channel.send('<:RedCrossMark:582240944863313934> The answer is not a number')
    }


    let embed = new Discord.RichEmbed()
    .setDescription(answer)
    
    message.channel.send("Calculating...").then(a => a.edit(`Answer to: ${numberone} / ${numbertwo}`, embed));
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/divide used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: "divide",
};
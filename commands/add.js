const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let numberone = parseInt(args[0]);
    let numbertwo = parseInt(args[1]);
    let answer = parseInt(numberone + numbertwo);
    let embed = new Discord.RichEmbed()
    .setDescription(answer);

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

    message.channel.send(`Calculating...`).then(msg => msg.edit(`Answer to: ${numberone} + ${numbertwo}`, embed));
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/add used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

}

module.exports.help = {
    name: "add",
};
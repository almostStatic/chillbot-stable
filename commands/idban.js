const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")){
        return message.reply(`You need to be staff to use this command.`)
    };
    let l = message.guild.emojis.find(emoji=>emoji.name==="loading");
    let e = message.guild.emojis.find(emoji=>emoji.name === "ano");
    let t = message.guild.emojis.find(emoji=>emoji.name==="ayes");
    let toBan = args[0];
    let reaosn = args.join(" ").slice(toBan.length)

    if(isNaN(toBan)){
        return message.reply(`That is not a valid Discord USER ID`)
    };
    message.channel.send(`${l} Banning user with ID **${toBan}**...`).then(async(msg) =>{
        await message.guild.ban(toBan);
        let banEmbed = new Discord.RichEmbed()
        .setTitle(`Action: Ban -> ${toBan}`)
        .addField("Banned By", message.author.tag + ' | ' + message.author.id)
        .addField("Bnned User", `<@${toBan}> | ${toBan}`)
        .addField("Banned At", message.createdAt.toDateString(), true)
        .addField("Banned In", message.channel, true)
        .addField("Reaosn", reaosn)
        .setColor(message.member.displayColor)
        .setTimestamp()
        let reasonembed = new Discord.RichEmbed()
        .setDescription(`**Reason:** ${toBan}`)
        .setTimestamp()
        
        let kickChannel = message.guild.channels.find(`name`, "bot-moderation-logs");
        if(!kickChannel) return message.channel.send("<:RedCrossMark:582240944863313934> Can't find incidents channel, I will log the kick in this channel.", kickEmbed);
        kickChannel.send(banEmbed);
        await msg.edit(`${t} User with ID **${toBan}** has been banned from the server`, reasonembed)
    }); 
};

module.exports.help = {
    name: 'idban',
};
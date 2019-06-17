const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("<:RedCrossMark:582240944863313934> I cannnot find that user!");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`<:RedCrossMark:582240944863313934> You can't use this command! `);
if(bUser.hasPermission("MANAGE_GUILD")) return message.channel.send("<:RedCrossMark:582240944863313934> **Other staff may not be banned**");
let chid = message.channel.id;
let servername = message.guild.name;
if(!bReason){
    return message.reply('<:RedCrossMark:582240944863313934> You need to include a reason!')
};

    let banEmbed = new Discord.RichEmbed()
    .setTitle(`Action: Ban -> ${bUser.user.tag}`)
    .setColor("#ff0000")
    .addField("Banned User", `${bUser} (${bUser.id})`, true)
    .addField("Banned By", `<@${message.author.id}> (${message.author.id})`, true)
    .addField("Banned In", `<#${chid}>`, true)
    .addField("Banned At", message.createdAt.toDateString(), true)
    .addField("Reason", bReason);

    let reasonEmbed = new Discord.RichEmbed()
    .setDescription(`**Reason:** ${bReason}`)
    .setColor("#4dd6a3");
    let incidentchannel = message.guild.channels.find(`name`, "bot-moderation-logs");
        if(!incidentchannel) return message.channel.send("Can't find bot modlogs channel.");

            message.channel.send(`Attempting to ban user...`)
            bUser.send(`Hey! \n You got banned from ${servername}`, banEmbed)
            bot.channels.get("580327932824911892").send(banEmbed);
            incidentchannel.send(banEmbed);
            message.channel.send(`<:GreenTick:580716592980164618> User: \`${bUser.user.tag}\` has been banned from the server`, reasonEmbed)
            message.guild.member(bUser).ban(bReason);  
            let used = new Discord.RichEmbed()
            .setAuthor(`Command Used:`, bot.user.avatarURL)
            .setColor(`#81868e`)
            .setDescription(`/ban used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
            bot.channels.get("575619138576318484").send(used)


}

module.exports.help = {
    name: "ban"
}
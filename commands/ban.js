const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("Error 404 (!bUser)");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Nah, hell nah!");
if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Admins cant be banned ooof");
/*if(!bUser.banable){
    message.reply("I cant ban that user, do they have a higher role than me? Do I have ban members permission?")
};*/
let chid = message.channel.id;
let servername = message.guild.name;

    let banEmbed = new Discord.RichEmbed()
    .setTitle("Member Bannned:")
    .setColor("#ff0000")
    .addField("Banned User", `${bUser} (${bUser.id})`, true)
    .addField("Banned By", `<@${message.author.id}> (${message.author.id})`, true)
    .addField("Banned In", `<#${chid}>`, true)
    .addField("Time", message.createdAt, true)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "bot-moderation-logs");
        if(!incidentchannel) return message.channel.send("Can't find bot modlogs channel.");

            message.channel.send(`Attempting to ban user...`)
            bUser.send(`Hey! You got banned from ${servername}`, banEmbed)
            incidentchannel.send(banEmbed);
            message.channel.send(`${bUser.user.tag} has been banned!`)
            message.guild.member(bUser).ban(bReason);   


}

module.exports.help = {
    name: "ban"
}
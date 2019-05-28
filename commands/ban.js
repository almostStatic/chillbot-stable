const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("Error 404 (!bUser)");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You can't do this... `);
if(bUser.hasPermission("MANAGE_GUID")) return message.channel.send("**Other staff may not be banned**");
let chid = message.channel.id;
let servername = message.guild.name;
if(!bReason){
    bReason = "no reason given";
};

    let banEmbed = new Discord.RichEmbed()
    .setTitle("Member Bannned:")
    .setColor("#ff0000")
    .addField("Banned User", `${bUser} (${bUser.id})`, true)
    .addField("Banned By", `<@${message.author.id}> (${message.author.id})`, true)
    .addField("Banned In", `<#${chid}>`, true)
    .addField("Time", message.createdAt, true)
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
            .setDescription(`c.ban used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
            bot.channels.get("575619138576318484").send(used)


}

module.exports.help = {
    name: "ban"
}
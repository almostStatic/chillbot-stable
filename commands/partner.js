const Discord = require("discord.js");

module.exports.run = async(bot, message, args)=>{
    /*
    Correct Usage
    c.partner [sever rep] [invite URL] [description]
    */
    if(!message.member.hasPermission("MANAGE_GUILD")){
        message.delete(50);
        message.relpy('Only staff members have access to this command')
    }
    let usage = new Discord.RichEmbed()
        .setTitle("Usage ")
        .setDescription("**Command Usage**")
    let serverrep = message.mentions.members.first();
    let inviteurl = args[1];
    let desc = args.join(" ").slice(22 + inviteurl.length);
message.channel.send(`"serverrep": ${serverrep}\n"inviteurl": ${inviteurl}\n"desc": ${desc}`)
    let partnerEmbed = new Discord.RichEmbed()
    .setTitle("New Partnership!")
    .setColor(0x42f4b9)
    .setDescription(`**Description:**\n${desc}\n[Join Here](${inviteurl})`)
    .addField("Server Rep", serverrep)
    .setTimestamp()
    let partnerChannel = message.guild.channels.find(`name`, "partners");
    if(!partnerChannel) return message.reply('command failed : `channel: partners not found (@!ERR!@)`');
//    partnerChannel.send(partnerEmbed);
 //   await message.reply('Partnership?: sucsessful!')

};

module.exports.help = {
    name: 'partner'
}
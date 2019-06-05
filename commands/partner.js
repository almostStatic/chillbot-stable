const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    /*
    Correct Usage
    c.partner [sever rep] [invite URL] [description]
    */
    let usage = new Discord.RichEmbed()
    .setTitle("Usage: ")
    .setDescription("")
    .setTimestamp()
    if(!message.member.hasPermission("MANAGE_GUILD")){
        message.delete(50);
        message.relpy('Only staff members have access to this command');
    };
    let usage = new Discord.RichEmbed()
        .setTitle("Usage ")
        .setDescription("**c.partner [PartneringServerRepMention] [server invite url] [server description]** | Partner a server to this one!")
        .addField("Example", 'c.partner @someone https://discord.gg/invite-url this is a great server');
    let serverrep = message.mentions.members.first();
    let inviteurl = args[1];
    let desc = args.join(" ").slice(22 + inviteurl.length);
    let partnerChannel = message.guild.channels.find(`name`, "partners");
    let logChannel = message.guild.channels.find(`name`, "partner-logs");

    if(!serverrep){
        message.channel.send(`A server rep for the partnerring guild must be provided`, usage);
    };

    if(!inviteurl){
        message.channel.send('A valid invite URL must be provided', usage);
    };

    if(!desc){
        message.channel.send('A server description must be provided', usage);
    };

    if(!partnerChannel){
        message.reply('**I cannot find the partnerChannel, please contact and Admin for help!**');
    };

    let partnerEmbed = new Discord.RichEmbed()
    .setTitle("New Partnership!")
    .setColor(0x42f4b9)
    .addField("Description", `${desc}\n**[Join Here!](${inviteurl})**`)
    .setTimestamp();
    

    let partnerLogEmbed = new Discord.RichEmbed()
    .setTitle(`Action: Partnership -> ${serverrep.user.tag}`)
    .addField("Partnership to:", serverrep + " | " + serverrep.user.id, true)
    .addField("Responsible User", message.author.tag + " | " + message.author.id, true)
    .addField("Partnerred At", message.createdAt.toDateString(), true)
    .addField('Invite Link', inviteurl, true)
    .setTimestamp();
    if(!partnerChannel) return message.reply('command failed : `channel: partners not found (@!ERR!@)`');
    partnerChannel.send({embed: partnerEmbed});
    logChannel.send({embed: partnerLogEmbed});
};

module.exports.help = {
    name: 'partner',
};

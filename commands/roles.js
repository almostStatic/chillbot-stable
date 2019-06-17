const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    const rolelist = message.guild.roles.map(r=>r.name.toString()).join("\n");
    message.channel.send('<:GreenTick:580716592980164618> Check your DMs!')
    message.member.send(`
                       **__Roles__**
\`\`\`
${rolelist}
\`\`\`
    `);
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/roleinfo used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

};

module.exports.help = {
    name: 'roles'
}
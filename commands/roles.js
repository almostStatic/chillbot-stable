const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    const rolelist = message.guild.roles.map(r=>r.name.toString()).join("\n");
    message.channel.send('<:GreenTick:580716592980164618> Check your DMs!')
    message.member.send(`
                       **__Roles__**
\`\`\`
${rolelist}
\`\`\`
    `)
}

module.exports.help = {
    name: 'roles'
}
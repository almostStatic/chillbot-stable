const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    const rolelist = message.guild.roles.map(r=>r.name.toString()).join("\n");
    let embed = new Discord.RichEmbed()
    .setTitle('Roles')
    .setDescription(`\`\`\`css\n${rolelist}\n\`\`\``)
        message.channel.send({ embed })
    //  message.channel.send(`**__Role List__**\n\`\`\`\n${rolelist}\n\`\`\``)
}

module.exports.help = {
    name: 'roles'
}
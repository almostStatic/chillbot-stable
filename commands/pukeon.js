const Discord = require("discord.js")


module.exports.run = (bot, message, args) => {
    if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

    let member = message.mentions.members.first()

    const embed = new Discord.RichEmbed()
                                        
        .setDescription(`${message.member.user.tag} has puked all over ${member.user.tag} 🤮 `)
        .setColor(`#d4ff00`)

    const notmentioned = new Discord.RichEmbed()

        .setTitle(`You need to mention a user to puke on!`)

    
    message.channel.send(embed);
    if(!member) return message.channel.send(notmentioned);
    const used = new Discord.RichEmbed()
    
    .setTitle("Command Used:")
    .setDescription(`c.pukeon used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
      bot.channels.get("575619138576318484").send(used);

};

module.exports.help = {
    name: "pukeon"
  };

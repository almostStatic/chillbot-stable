const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let tosend = new Discord.RichEmbed()

    .setTitle("Staff List:")
    .setDescription("\n <@425165710847770634> [Admin] \n <@336920581624692737> [Admin] [Trusted] \n <@163715276733415426> [Admin] [Trusted] \n <@366692921245958146> [Moderator] [Trusted] \n <@293841631583535106> [Admin] [Trusted] \n <@429982720257687572> [Admin] \n <@171397553160585217> [Admin] [Trusted] \n <@373900508026372097> [Co-Owner] [Head Admin] [Very Trusted]")
    .setColor("RANDOM")

    message.channel.send({embed: tosend});
    
    const used = new Discord.RichEmbed()

        .setTitle("Command Used:")
        .setDescription(`c.staff-list used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
        .setColor("RANDOM")
        bot.channels.get("575619138576318484").send(used);

}

module.exports.help = {
    name: "staff-list"
}

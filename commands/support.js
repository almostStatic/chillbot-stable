const Discord = require("discord.js");
const client  = new Discord.Client();

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()

.setDescription(`If you need any support, pleas edon't hesitate to DM sad (Eclipse)#3728`)
.setColor("#4bf442")

message.channel.send(embed);
    
    const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.support used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
        bot.channels.get("575619138576318484").send(used);


}

module.exports.help = {
    name: "support"
};

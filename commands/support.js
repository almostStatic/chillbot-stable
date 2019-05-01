const Discord = require("discord.js");
const client  = new Discord.Client();

module.exports.run = async (bot, message, args) => {

const embed = new Discord.RichEmbed()

.setDescription(`If you need any support, pleas edon't hesitate to DM sad (Eclipse)#3728`)
.setColor("#4bf442")

message.channel.send(embed);

}

module.exports.help = {
    name: "support"
};
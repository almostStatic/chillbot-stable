const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const no = new Discord.RichEmbed()

.setDescription("This command has been restricted to the bot owners/managers to prevent the missuse of this command.")
.setColor("RANDOM")

    if(message.author.id !== "501710994293129216") return message.channel.send(no)
    let member = message.mentions.members.first();
    if(!member) return message.channel.send("You need to mention a user for this command to work!")
    const sayMessage = args.join(" ");

    let sendmesage = new Discord.RichEmbed()

    .setDescription(sayMessage)
    .setColor("RANDOM")

    member.send({embed: sendmesage});

}

module.exports.help = {
  name: "dm"
}
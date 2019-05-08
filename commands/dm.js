const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const no = new Discord.RichEmbed()

.setDescription("This command has been restricted to the bot owners/managers to prevent the missuse of this command.")
.setColor("RANDOM")

    if(message.author.id !== "501710994293129216") return message.channel.send(no)
    let sendto = message.mentions.members.first();
    if(!sendto) return message.channel.send("You need to mention a user for this command to work!")
    const sayMessage = args.join(" ").slice(22);

    let sendmesage = new Discord.RichEmbed()
 
    .setDescription(sayMessage)
    .setFooter("This message was sent to you by: sad (Eclipse)#3728")
    .setColor("RANDOM")

    try {
        sendto.send({embed: sendmesage});
    } catch(e) {
        message.channel.send(`There was an error whilst DMing ${sendto.user.tag} \n **Error:** ${e}`)
    }

    message.delete(0);
    message.channel.send(`Your message has been sent to ${sendto.user.tag}`)
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.dm used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id}) to DM ${sendto.user.tag} \`${sayMessage}\``)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);


    

}

module.exports.help = {
  name: "dm"
}

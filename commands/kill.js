const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {



                if(message.author.id !== "501710994293129216") return;
                    bot.channels.get("575619138576318484").send("Client destroyed !!");



                             message.channel.send("Goodbye!")

                             let used = new Discord.RichEmbed()
                             .setAuthor(`Command Used:`, bot.user.avatarURL)
                             .setColor(`#81868e`)
                             .setDescription(`/kill used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
                             bot.channels.get("575619138576318484").send(used)
    
    
                                          process.exit()


}

module.exports.help = {
  name: "kill"
}

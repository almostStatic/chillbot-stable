const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.kill used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);


                if(message.author.id !== "501710994293129216") return;
const used = new Discord.RichEmbed()

.setTitle("Command Used:")
.setDescription(`c.kill used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
.setColor("RANDOM")
bot.channels.get("575619138576318484").send(used);



        message.channel.send("Goodbye!")
    
    
        process.exit()


}

module.exports.help = {
  name: "kill"
}

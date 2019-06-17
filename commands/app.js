const Discord = require("discord.js")


module.exports.run = (client, message, args, level) => {

    if(message.author.id !== "501710994293129216") return message.channel.send("This is am owner-only command!");

    let appEmbed = new Discord.RichEmbed()

    .setTitle("Link to app hosted on Heroku")
    .setURL("https://dashboard.heroku.com/apps/bot-hosted-using-heroku/deploy/github")
    .setColor("RANDOM")
    
    message.author.send({embed: appEmbed});
    message.channel.send("Message Sent!")

    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/app used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)

        
}

module.exports.help = {
    name: "app"
  }
  

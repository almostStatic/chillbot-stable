const Discord = require("discord.js")


module.exports.run = (client, message, args, level) => {

    if(message.author.id !== "501710994293129216") return message.channel.send("This is am owner-only command!");

    let appEmbed = new Discord.RichEmbed()

    .setTitle("Link to app hosted on Heroku")
    .setURL("https://dashboard.heroku.com/apps/bot-hosted-using-heroku/deploy/github")

    message.author.send({embed: appEmbed});
    message.channel.send("Message Sent!")
        
}

module.exports.help = {
    name: "app"
  }
  
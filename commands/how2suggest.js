const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("How to submit suggestions")
    .setColor("RANDOM")
    .setDescription("Do you have some suggestions for us? \n **Well you're in luck! We hapily accept suggestions.** \n Following a recent update to our bot, you are now able to vote on suggestions once submitted. \n Here's the command: \n **\`c.suggest add some music channels\`**  \n **__PLEASE NOTE:__** \n our staff team are at **no** oblogation to accept your suggestion. It will be discussed amongst the staff team first. Thank you.")

    message.channel.send({embed: embed})
}

module.exports.help = {
    name: "how2suggest"
}
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle("How to report users")
.setDescription(`You can report users if you have seen them break one or more rules. \n **So, How do I do it?** \n To report users, all you have to do is use the command \`c.report @user <reason>\` \n For example: c.report @user spamming`)
.setColor("RANDOM")
.setFooter("You will find a list of reported users in #reports", message.author.avatarURL)
message.channel.send(embed)
}

module.exports.help = {
    name: "how2report"
}
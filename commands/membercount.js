const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let members = message.guild.memberCount // ? idk if thats gonna work hmm
    message.channel.send(`We currently have **${members}** members! Keep working hard to invite more people!`)

}

module.exports.help = {
    name: "membercount"
};
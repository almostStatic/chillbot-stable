const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const tags = new Discord.RichEmbed()
    .setTitle("Tags")
    .setDescription("Tags are something that you could use to help explain something to another member,  these are mainly made for the use of a staff member")
    .addField("Tags: (Commands)", `\n **c.how2suggest** -> Send an embed explaining how to submit suggestions \n **c.how2report** -> Send an embed explaining how to report a user \n **c.dev-mode** -> Get instructions on how to enable discord developer mode and its usage`)

        message.channel.send({embed: tags});
}

module.exports.help = {
    name: "tags"
}
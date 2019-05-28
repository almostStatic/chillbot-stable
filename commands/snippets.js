const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const snips = new Discord.RichEmbed()
    .setTitle("Snippets")
    .setDescription("Snippets are something that you could use to help explain something to another member,  these are mainly made for the use of a staff member")
    .addField("Snippets: (Commands)", `\n **c.how2suggest** -> Send an embed explaining how to submit suggestions \n **c.how2report** -> Send an embed explaining how to report a user \n `)

        message.channel.send({embed: snips});
}

module.exports.help = {
    name: "snippets"
}
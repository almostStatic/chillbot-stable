const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    try {
        message.channel.send("Goodbye!")
        process.exit(2)
    } catch (error) {
        message.channel.send(`Failed to destroy client instance. \n \` \` \`js ${error}\`\`\``);
    }

}

module.exports.help = {
  name: "kill"
}
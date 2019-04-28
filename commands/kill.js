const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    try {
        process.exit(2)
        message.channel.send("Attempting to destroy client instance...")
    } catch (error) {
        message.channel.send(`Failed to destroy client instance. \n \` \` \`js ${error}\`\`\``);
    }

}

module.exports.help = {
  name: "kill"
}
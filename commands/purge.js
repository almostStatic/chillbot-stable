const Discord = require("discord.js");
const client = new Discord.Client();

client.on('error', console.error);

module.exports.run = async (bot, message, args) => {

        // This command removes all messages from all users in the channel, up to 100.
        
        // get the delete count, as an actual number.
        const deleteCount = parseInt(args[0], 10);
        if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

        // Ooooh nice, combined conditions. <3
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply(" ❌ **ERROR:** Please provide a number between 2 and 100 for the number of messages to delete");
        
        // So we get our messages, and delete them. Simple enough, right?
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(` ❌ **ERROR:** Couldn't delete messages because of: ${error}`));

}

module.exports.help = {
  name: "purge"
}

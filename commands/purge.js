const Discord = require("discord.js");
const client = new Discord.Client();

client.on('error', console.error);

module.exports.run = async (bot, message, args) => {

  let usage = new Discord.RichEmbed()

      .setTitle(`Usage:`)
      .setColor("#4e88e5")
      .setDescription(`\n **Command** \`c.purge \` \n \n \n c.purge 98 \n c.purge 346`)
        // This command removes all messages from all users in the channel, up to 100.
        
        // get the delete count, as an actual number.
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`you may not use this command!`);       
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount) return message.channel.send({embed: usage})
        if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");

        // Ooooh nice, combined conditions. <3
        if(!deleteCount || deleteCount < 2 || deleteCount > 500)
          return message.reply(" ❌ **ERROR:** Please provide a number between 2 and 500 for the number of messages to delete");
        
          const senddelcount = deleteCount - 1;

          const messagetosendafter = new Discord.RichEmbed()

          .setDescription(`I have deleted ${senddelcount} messages!`)
          .setColor("#4bf442")
          message.delete()

        
        // So we get our messages, and delete them. Simple enough, right?
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(` ❌ **ERROR:** Couldn't delete messages because of: ${error}`));
            message.channel.send({embed: messagetosendafter}).then(msg => {
              msg.delete(3000);
            })
            let used = new Discord.RichEmbed()
            .setAuthor(`Command Used:`, bot.user.avatarURL)
            .setColor(`#81868e`)
            .setDescription(`/purge used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id} to delete ${deleteCount}`)
            bot.channels.get("575619138576318484").send(used)

  
}

module.exports.help = {
  name: "purge"
}

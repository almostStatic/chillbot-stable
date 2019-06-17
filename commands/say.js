const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 // if(message.author.id !== "501710994293129216") return message.reply("Only the owner**s** can use this command!")

 if(message.author.id === "437255943181565962") return message.reply(`Due to your recent actions, you have been blacklisted from using this command! \n \b \b \b \b`)

        // makes the bot say something and delete the message. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
      
        const sayembed = new Discord.RichEmbed()
      
        .setDescription(sayMessage)
        .setColor('RANDOM')
      
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
        message.channel.send(sayembed);
        let used = new Discord.RichEmbed()
        .setAuthor(`Command Used:`, bot.user.avatarURL)
        .setColor(`#81868e`)
        .setDescription(`/say used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}\nI said: \`\`\`\n${sayMessage}\n\`\`\``)
        bot.channels.get("575619138576318484").send(used)


}

module.exports.help = {
  name: "say"
}

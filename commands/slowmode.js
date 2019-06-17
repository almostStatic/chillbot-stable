const Disord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let count = args[0];
  

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
      const slowmodeSetLogEmbed = new Discord.RichEmbed()
      .setTitle(`Action: Slowmode`)
      .setDescription(`**Channel:** ${message.channel} \n **Action:** Slowmode: <new: set> \n **Length:** ${count} seconds`)
      .setColor("#bfed28")
      .setFooter(`Channel ID: ${message.channel.id}`)
    try {

      let logsChannel = message.guild.channels.find(`name`, "logs")
      logsChannel.send(slowmodeSetLogEmbed)
        message.channel.send(`${message.channel} is now in *s* *l* *o* *w*  *m* *o* *t* *i* *o* *n*`)
        message.channel.send(`Normal users are now able to send one message once every ${count} seconds`)
        message.channel.setRateLimitPerUser(count, `Slowmode set to ${count} seconds. \n Responsible User: ${message.author.tag}`)
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    
      let used = new Discord.RichEmbed()
      .setAuthor(`Command Used:`, bot.user.avatarURL)
      .setColor(`#81868e`)
      .setDescription(`/slowmode used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
      bot.channels.get("575619138576318484").send(used)
    }
    

module.exports.help = {
    name: "slowmode",
};

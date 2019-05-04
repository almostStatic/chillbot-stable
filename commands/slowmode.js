const Disord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let count = args.join(" ");

    const set = new Discord.RichEmbed()

    .setDescription(`Set slowmode to ${count} seconds!`)
    .setColor("RANDOM")
    .setTimestamp()

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

    try {

        message.channel.setRateLimitPerUser(count)
        message.channel.send({embed: set})

    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
    

module.exports.help = {
    name: "slowmode",
};

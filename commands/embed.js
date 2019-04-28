const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// 
// /embed #ff0000 <#channelname>
// channel id length:
//<#570585605763891214>
//21
// user id length : 19
    let hex = "#"+ args.join(" ").slice(7);
    let content = args.join(" ").slice(21);
    let channel = args.join(" ").slice(22);
    if(!channel) return message.reply("Invalid Syntax. Usage: `/embed <hex> <channel> <content>`")

try {
    let embed = new Discord.RichEmbed()

    .setDescription(content)
    .setColor(hex)

} catch (err) {
message.channel.send(`Invalid Syntax: \n \`\`\`js ${clean(err)}\`\`\``)
}

}

module.exports.help = {
  name: "embed"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// CORRECT USAGE:
//c.clog This has been logged on the console!!!!!! 

let tolog = args.join(" ");
console.log(tolog);
message.channel.send(`Attempted to log \`${tolog}\` on the console!`)
        const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.clog used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id}) to log ${tolog}`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);



}

module.exports.help = {
    name: "clog",
};

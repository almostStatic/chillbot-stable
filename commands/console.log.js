const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// CORRECT USAGE:
//c.clog This has been logged on the console!!!!!! 

let tolog = args.join(" ");
console.log(tolog);
message.channel.send(`Attempted to log \`${tolog}\` on the console!`)

}

module.exports.help = {
    name: "clog"
}
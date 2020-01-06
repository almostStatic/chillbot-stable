const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let ping = Math.round(message.client.ping); 
  const ping1 = new Discord.RichEmbed()
  .setDescription(`:ping_pong: Please wait! It wont take long :) \n if you see this message its probs not a good thing`)
  .setColor("RANDOM");
  message.channel.send({embed: ping1}).then((msg) => {
  const ping2 = new Discord.RichEmbed()
  .addField('__**API:**__', `${ping} MS`, true)
  .addField('__**Ping:**__', `${msg.createdTimestamp - message.createdTimestamp} MS`, true)
  .setColor('RANDOM');
  msg.edit(ping2)
    });
};

module.exports.help = {
	name: 'ping',
};
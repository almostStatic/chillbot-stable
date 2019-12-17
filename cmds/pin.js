const Discord = require("discord.js")

module.exports.run = async (client, message, args, error, getSuppot, green, red) => {
	let msgid = args[0]
	let filte = m => m.author.id === message.author.id;
	if (!msgid) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription("You need to inclue the message id of the message you want to pin!")
			.setColor([255, 0, 0])
		})
	}
	message.channel.fetchMessages({around: msgid, limit: 1})
  .then(messages => {
    const fetchedMsg = messages.first(); // messages is a collection!)
		if (!fetchedMsg) {
			return error("Please include a valid message ID.")
		}
    // do something with it
    fetchedMsg.pin()
  })
		.catch(err => {
			error(err)
		})
}

module.exports.help = {
	name: 'pin',
};
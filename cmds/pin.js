const Discord = require("discord.js")

module.exports = {
	name: 'pin',
	aliases: ['pin'],
	usage: 'pin <message-id>',
	desc: 'Pin a certain message to the channel. You **must give me a valid message ID** or else I cannot pin the message!!',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	if(!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
				return message.channel.send(`${process.env.re} **${message.author.username}**, I do not have the Manage Messages permission!\n\n> Check my permissions by using the command \`>perms\`! For more information, do \`>help\``)

	}
	if(!message.member.permissions.has('MANAGE_MESSAGES')) {
		return message.channel.send(`${process.env.re} **${message.author.username}**, you need the Manage Messages permission!\n\n> Check your permissions by using the command \`>perms\`! For more information, do \`>help\``)
	}
	let msgid = args[0]
	let filte = m => m.author.id === message.author.id;
	if (!msgid) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription("You need to inclue the message id of the message you want to pin!")
			.setColor(jsonColor)
		})
	}
	message.channel.fetchMessages({around: msgid, limit: 1})
  .then(messages => {
    const fetchedMsg = messages.first(); // messages is a collection!)
		if (!fetchedMsg) {
			return message.channel.send("Please include a valid message ID.")
		}
    // do something with it
    fetchedMsg.pin()
  })
		.catch(err => {
			return message.reply('I was unable to pin the message with ID ' + args[0])
		})
}
}
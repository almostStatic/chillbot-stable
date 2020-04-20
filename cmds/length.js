const Discord = require('discord.js');

module.exports = {
	name: 'length',
	aliases: ['length', 'len'],
	desc: 'See the length of letters (+ spaces), letters (- spaces) and total amount of words.',
	usage: 'len <text>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		msg = await message.channel.send(`${process.env.loading} Checking Length...`)
		if (!args.length) {
			return msg.edit(`${process.env.re} You need to provide some text to get the length of...`)
		}
		text = args.join(' ');
		words = args.length;
		letters = args.join(' ').length;
		lettersNoSpaces = args.join(' ').replace(/ /g, "").length;
		msg.edit("", {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setAuthor(message.author.tag, message.author.avatarURL)
			.setDescription(
				`
				**Words**: ${words}
				**Characters**: ${letters}
				**Characters (no spaces)**: ${lettersNoSpaces}
				`
			)
		})
	},
};
const Discord = require('discord.js');

module.exports = {
	name: 'upper',
	aliases: ['upper', 'uppercase', 'upper-case'],
	desc: 'Convert some text to upper case',
	usage: 'upper <some text here>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let msg = await message.channel.send(`${process.env.loading} Converting to uppercase...`);
		if (!args.length) {
			return msg.edit(`${process.env.re} You need to give me some text to convert to upper case!`)
		};
		message.channel.send('', {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setAuthor(message.author.tag, message.author.avatarURL)
			.setDescription(args.join(' ').toUpperCase())
		})
	},
};
const Discord = require('discord.js');
const { RichEmbed } = require('discord.js')

module.exports = {
	name: 'escape-markdown',
	aliases: ['esmd', 'escmd', 'esc-md'],
	desc: 'Escape discord markdown',
	usage: 'escape-markdown <some content to escape>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let content = args.join(' ');
		if (!content) {
			return message.reply('You need to tell me what to escape!')
		};
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.tag, message.author.avatarURL)
		.setDescription(Discord.escapeMarkdown(content))
		.setColor(jsonColor)
		.setTimestamp()
		message.channel.send({ embed });
	},
};
const Discord = require('discord.js');

module.exports = {
	name: 'discrim',
	aliases: ['discrim'],
	desc: 'search for users with the same discriminator as yourself (You can also search for other people\'s discrims if you supply it)',
	usage: 'discrim <discrim>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
		let discrim = args[0];
		if (!args[0]) discrim = message.author.discriminator;
		if (discrim.startsWith('#') && discrim.length == 5) {
			discrim = discrim.slice(discrim.length - 4)
		};
		let results = trim(client.users.filter(x => x.discriminator.toLowerCase() == discrim.toLowerCase()).map(x => x.tag.toString()).join('\n'), 500) || `There are no users that I can find with the discriminator **${discrim}**`;
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setAuthor(`Users with discriminator ${discrim}`, message.author.avatarURL)
			.setDescription(results)
			.setColor(jsonColor)
			.setTimestamp()
		});
	},
};
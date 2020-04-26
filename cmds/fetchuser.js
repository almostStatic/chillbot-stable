const { RichEmbed } = require('discord.js');
const { inspect } = require('util');

module.exports = {
	name: 'fetchuser',
	aliases: ['fetchuser', 'fetch-user'],
	desc: 'fetches a user (as partial)',
	usage: 'fetchuser <id>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
				function getUserFromMention(mention) {
			if (!mention) return;

			if (mention.startsWith('<@') && mention.endsWith('>')) {
				mention = mention.slice(2, -1);

				if (mention.startsWith('!')) {
					mention = mention.slice(1);
				}

				return mention;
			};
		};		
		if (!args.length) return message.channel.send(`${process.env.re} You need mention a user or provide a valid ID!`);
		const msg = await message.channel.send(`${process.env.loading} Fetching user...`);
		let user;
			if (message.mentions.users.first()) {
				user = await client.fetchUser(message.mentions.users.first().id);
			} else {
				user = await client.fetchUser(args[0]);
			};
		if (!user) return msg.edit(`${process.env.re} I can't find that user.`);
		const data = inspect(user, { depth: 0 });
		msg.edit('', { 
			embed: new RichEmbed()
			.setAuthor(user.tag, user.avatarURL)
			.setColor(jsonColor)
			.setDescription("```js\n" + data + "\n```")
			.setFooter(`in ${Date.now() - msg.createdTimestamp} MS`)
		});
	},
};
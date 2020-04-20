const Discord = require('discord.js');

module.exports = {
	name: 'fetchuser',
	aliases: ['fetchuser', 'fetch-user'],
	desc: 'fetches a user (as partial)',
	usage: 'fetchuser <id>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let u = await client.fetchUser(args[0]);
		if (!u) return message.channel.send(`${process.env.re} I can't find that user.`)
		JSON.stringify(u)
		message.channel.send(u, { code: 'json' });
	},
};
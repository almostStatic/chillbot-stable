const Discord = require('discord.js')
const cds = new Set();
module.exports = {
	name: 'pee',
	aliases: ['pee'],
	desc: 'pee on someone lol',
	usage: 'pee <@user/ID>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		if (cds.has(message.author.id)) {
			return message.channel.send('You can only pee on someone once every **10** seconds!')
		};
		if (!args.length) {
			return message.channel.send('Use this command properly please...')
		}
		let peep = message.mentions.users.first();
		if (!peep) {
			peep = await client.fetchUser(args[0])
		};
		if (!peep) {
			return message.channel.send('Use this command properly, ' + message.author.username);
		};
		if (peep.bot == true) {
			return message.channel.send('wtf bruh how u gonna pee on a bot?')
		};
		tag = `${peep.username}#${peep.discriminator}`;
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setDescription(`${message.author.tag} has peed on ${tag}`)
			.setColor(jsonColor)
		});
		cds.add(message.author.id)
		if (message.author.id == client.owner) {
			cds.delete(client.owner);
		};
		setTimeout(function(){
			cds.delete(message.author.id);
		}, (10 * 1000))
	},
}
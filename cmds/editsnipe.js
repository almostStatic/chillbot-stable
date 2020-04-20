const Discord = require('discord.js');
const keyv = require('keyv')
const es = new keyv('sqlite://./database/editsnipes.sqlite')

module.exports = {
	name: 'editsnipe',
	aliases: ['es'],
	desc: 'view the last editted message in a channel',
	usage: 'editsnipe',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let snipe = await es.get('es' + message.channel.id)
		if (!snipe) {
			return message.channel.send('Nothing to snipe here...')
		};
		let usr = await client.fetchUser(snipe.author)
		let av = `https://cdn.discordapp.com/avatars/${usr.id}/${usr.avatar}`;
		let tag = `${usr.username}#${usr.discriminator}`;
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setAuthor(tag, av)
			.setTitle('Edit Sniped')
			.addField("Old Message", snipe.oldMsg, true)
			.addField('New Message', snipe.newMsg, true)
			.setTimestamp()
		})
	},
};
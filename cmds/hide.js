const Discord = require('discord.js');
const keyv = require('keyv');
const hides = new keyv('sqlite://./database/hides.sqlite')

module.exports = {
	name: 'hide',
	aliases: ['hide', 'h'],
	desc: '**Hides** a message, you will need to **click on the link that was given** in order to view it.',
	usage: 'hide <message>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		message.delete().catch((err) => {});
		let content = args.join(' ');
		let sent = await message.channel.send({
			embed: new Discord.RichEmbed()
			.setTitle('Hidden Message | Click To Reveal')
			.setURL(`https://chillbot.asad.codes/reveal?channel=${message.channel.id}`)
			.setColor('#36393e')
		})
		if (!content) {
			return message.channel.send(`${process.env.re} You need to provide a message to hide`);
		};
		let old = await hides.get(message.channel.id);
/*		if (!old) {
			old = {
				status: "N"
			}
		}
		if (old.status == 'Y') {
			return message.channel.send(`${process.env.re} The hide command was used recently in this channel (the last hidden message wasn't revealed)`)
		};
		*/
		await hides.set(message.channel.id, {
			message: args.join(' '),
			status: 'Y',
			channel: message.channel.id, 
			id: sent.id,
			timestamp: Date.now(),
		});
	},
};
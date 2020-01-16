const Discord = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	message.reply('static is still working on this lol')
	let msg = await message.channel.send('Verifying args...')
	let pollChannel = message.mentions.channels.first() || message.guild.channels.find(ch => ch.id === args[0])
	let pollTitle = args[1];
	let pollDesc = args.slice(2).join(' ');
	if (!pollChannel) return msg.edit(`${process.env.re} You need to provide a channel to hold the poll in!`)
	if (!pollTitle) {
		
	}
	
};

module.exports.help = {
	name: 'poll',
};
// pie was here >:D
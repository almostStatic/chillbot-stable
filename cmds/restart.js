const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
	if(message.author.id != process.env.ownerid ) {
		return message.reply('You can\'t use this command!')
	}
	let msg = await message.channel.send('Restarting...')
	
	await client.destroy()
	   .then(async() => {
	   	await client.login(process.env.token)
//	   	message.channel.send(`Restarted! Offline for **${Date.now() - msg.createdTimestamp} MS**`)
	   })
	 //  message.reply()
	   message.channel.send(`Restarted! Offline for: ${Date.now() - msg.createdTimestamp} **MS**`)
	   	  
	   
}

module.exports.help = {
	name: 'restart'
}
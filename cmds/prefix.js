const Discord = require('discord.js')
const jsonstoreclient = require('async-jsonstore-io')
const jsonstore = new jsonstoreclient('32381a85290515bf27e8f81000e0a7ab246ebdeb56db5ed9269a5851afabe20e')


module.exports.run = async(client, message, args, prefix) => {
		if(!message.member.permissions.has('MANAGE_GUILD')) {
			return message.channel.send(`${process.env.re} **${message.author.username}**, you need the manage server permission to change the prefix!`)
		}
		let msg = await message.channel.send('Changing prefix...')
		let newPrefix = args[0];
		if(!args[0]) {
			return msg.edit(`The server prefix is: \`${prefix}\``)
		}
		if(newPrefix == ' ') {
			return msg.edit(`${process.env.re} The prefix cannot be a space.`)
		};

		if(newPrefix.length > 4) {
			return msg.edit(`${process.env.re} The prefix cannot be longer than 3 characters!`)
		};

		jsonstore.send('prefix' + message.guild.id, newPrefix)
		msg.edit(`Prefix changed to: \`${newPrefix}\``)

}

module.exports.help = {
	name: 'prefix',
};
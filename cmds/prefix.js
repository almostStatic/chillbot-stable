const Discord = require('discord.js')
const jsonstoreclient = require('async-jsonstore-io')
const jsonstore = new jsonstoreclient('32381a85290515bf27e8f81000e0a7ab246ebdeb56db5ed9269a5851afabe20e')
const k = require("keyv");
let prefixes = new k("sqlite://./database/prefixes.sqlite")


module.exports = {
	name: 'prefix',
	aliases: ["set-prefix", 'prefix'],
	usage: 'prefix <new prefix>',
	desc: `Set the new prefix for the current server, the bot will no longer respond do its defailt prefix \`>\` unlesss changed back to it. If you\'ve mucked up somewhere and need help, us at the [support server](${process.env.supportServer}) can reset it for you!`,
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
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

		if (newPrefix == prefix) {
			return msg.edit("You really gonna change the server prefix to what it already is? cmon.")
		}

		prefixes.set('prefix' + message.guild.id, newPrefix)
		msg.edit(`${process.env.gre} Prefix changed to: \`${newPrefix}\``)

}
}
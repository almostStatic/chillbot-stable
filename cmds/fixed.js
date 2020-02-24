//

const Discord = require('discord.js')

module.exports = {
	name: 'fixed',
	aliases: ['fixed'],
	desc: '...',
	usage: 'fixed <message id>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
				let supportServer = client.guilds.get("575388933941231638");
		let ServerMember = supportServer.member(message.author);
		if (!ServerMember) {
			return message.reply("you need to be a member of my support server to even have a dream of this command working.")
		}
		let staffRole = supportServer.roles.find(x => x.name == '♕ Bot Staff ♕');
		if (!staffRole) return message.reply("Bot Staff role not found in supportServer. Contact an admin in the support server!")
		if (!supportServer.member(message.author).roles.has(staffRole.id)) {
			return message.channel.send(`${process.env.re} You must be a bot staff to use this command!`)
		}
	let ch = supportServer.channels.find(x => x.id == '681273991415070730');
	if(!ch) return;
	let m = args[0].toString();
	ch.fetchMessages({around: m, limit: 1})
		.then(async(msgs) => {
			let msg = msgs.first();
			msg.edit(`${process.env.gre} Bug \`${msg.id}\` was resolved on ${message.createdAt.toDateString()}`)
		})
		message.channel.send("Success!")
	},
}
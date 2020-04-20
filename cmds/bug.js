//

const Discord = require('discord.js')

module.exports = {
	name: 'bug',
	aliases: ['bug'],
	desc: '...',
	usage: 'bug <bug>',
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

		let bug = args.join(' ')
		if (!bug) return message.reply("You need to supply a bug in order for this command to work!")
		client.channels.get("681273991415070730").send(`:warning: New Bug: ${args.join(' ')}`)
		message.delete().catch((err) => {});
		message.channel.send("Bug Report Successful.");
	},
}
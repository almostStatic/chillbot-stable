const Discord = require("discord.js");

module.exports = {
	name: 'logs',
	aliases: ['logs'],
	usage: 'logs',
	desc: "Get access to the logs category of the support server, if run when you already have the orle",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		if (message.guild.id != '575388933941231638') {
			return message.channel.send('This command only works in our support server `' + prefix + "inv`")
		};
		let logsRole = message.guild.roles.find(r => r.name == 'Logs');
		if (message.member.roles.has(logsRole.id)) {
			await message.member.removeRole(logsRole.id)
			return message.reply("You lost the logs role. To get it back, just run this command again! `>" + this.name + "`")
		}
		message.member.addRole(logsRole.id, `User ran command ${this.name}`)
		message.reply("You have received the Logs role. To get this removed, just run the command agan.")
	},
};
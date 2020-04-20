const Discord = require('discord.js')
module.exports = {
	name: "guildids",
	aliases: ['guildids'],
	desc: "View a list of GUILD_IDS that the bot is in. This command is also limited to our devs only",
	usage: 'guildids',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let server = client.guilds.get('575388933941231638');
		let staff = server.roles.find(x => x.name == '♕ Bot Staff ♕')
		let mem = server.member(message.author);
		if (!mem) {
			return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`You cannot use this command!`)
				.setColor(jsonColor)
			})
		}
		if (!mem.roles.has(staff.id)) {
			return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`You cannot use this command!`)
				.setColor(jsonColor)
			});
		}

		message.author.send(client.guilds.map(x => `${x.name} - ${x.id} owned by ${x.ownerID}`.toString()).join('\n'), {
			split: true,
		})
		message.react('580716592980164618')
	
}

}